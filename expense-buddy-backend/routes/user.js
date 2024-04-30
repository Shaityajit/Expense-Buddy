const express = require('express');
const router = express.Router();
const zod = require('zod');
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const registerValidation = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(7)
});

const loginValidation = zod.object({
    email: zod.string().email(),
    password: zod.string().min(7)
});

router.post('/register', async (req,res)=> {
    await mongoose.connect(process.env.MONGODB_URL);
    const { success } = registerValidation.safeParse(req.body);

    if(!success) {
        return res.json({
            msg: "Email/Password Invalid."
        });
    }

    const existingUser = await User.findOne({
        email: req.body.email
    });

    if(existingUser) {
        return res.json({
            msg: "User already exist"
        });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const user = await User.create({
        name: req.body.user,
        email: req.body.email,
        password: hashedPassword
    });

    return res.json({
        user
    });
});

router.post('/login', async (req,res)=> {
    await mongoose.connect(process.env.MONGODB_URL);
    const { success } = loginValidation.safeParse(req.body);

    if(!success) {
        return res.json({
            msg: "Incorrect credentails"
        });
    }

    const user = await User.findOne({
        email: req.body.email
    });

    if(!user) {
        return res.json({
            msg: "Incorrect credentails"
        });
    }

    const matchPassword = await bcrypt.compare(req.body.password, user.password);

    if(!matchPassword) {
        return res.json({
            msg: "Incorrect Credentails"
        });
    }

    const token = jwt.sign({
        user: user._id
    }, process.env.JWT_SECRET);

    return res.json({
        token,
        user
    });
})

module.exports = router;