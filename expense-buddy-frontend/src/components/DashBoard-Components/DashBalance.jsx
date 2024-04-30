export function DashBalance() {
    return (
        <div>
            <h4 className="text-lg font-semibold mb-4">Your Balance</h4>
            <h1 id="balance" className="text-3xl font-bold mb-6">$0.00</h1>
            <div className="inc-exp-container bg-white rounded-lg p-4 flex justify-between items-center mb-6">
                <div className="text-center">
                    <h4>Income</h4>
                    <p id="money-plus" className="money plus text-green-500">+$0.00</p>
                </div>
                <div className="text-center">
                    <h4>Expense</h4>
                    <p id="money-minus" className="money minus text-red-500">-$0.00</p>
                </div>
            </div>
        </div>
    )
}