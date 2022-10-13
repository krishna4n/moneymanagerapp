import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props
  return (
    <div className="money-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-image"
        />
        <div>
          <p className="money-type">Your Balance</p>
          Rs.
          <p className="money-value" testid="balanceAmount">
            {income - expenses}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance-image"
        />
        <div>
          <p className="money-type">Your Income</p>
          Rs.
          <p className="money-value" testid="incomeAmount">
            {income}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-image"
        />
        <div>
          <p className="money-type">Your Expenses</p>
          Rs.
          <p className="money-value" testid="expensesAmount">
            {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
