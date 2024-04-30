import { DashNav } from "../components/DashBoard-Components/DashNav";
import { Sidebar } from "../components/DashBoard-Components/Sidebar";

export function ProfilePage() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="bg-gray-200 w-full p-4">
                <DashNav />
                <div className="flex flex-col mx-auto items-center text-center max-w-lg ">
                    <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center mb-5">
                        <span className="text-2xl text-white">U</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">User name</h3>
                    Logged in as User name (user@gmail.com) <br/>
                </div>
            </div>
        </div>
    )
}