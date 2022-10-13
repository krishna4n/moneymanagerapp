import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    income: 0,
    expenses: 0,
    title: '',
    amount: '',
    type: '',
    transactionsList: [],
  }

  onChangeTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onChangeAmount = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  onChangeType = event => {
    this.setState({
      type: event.target.value,
    })
  }

  addForm = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      title: '',
      amount: '',
      type: '',
    }))
    this.setState(prevState => ({
      expenses:
        type === 'EXPENSES'
          ? parseInt(prevState.expenses) + parseInt(amount)
          : parseInt(prevState.expenses),
      income:
        type === 'INCOME'
          ? parseInt(prevState.income) + parseInt(amount)
          : prevState.income,
    }))
  }

  onDeleteTransaction = id => {
    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(
        eachTrans => eachTrans.id !== id,
      ),
    }))

    this.setState(prevState => ({
      expenses:
        this.type === 'EXPENSES'
          ? parseInt(prevState.expenses) +
            parseInt(
              this.transactionsList.filter(eachT => id === eachT.id).amount,
            )
          : parseInt(prevState.expenses),
      income:
        this.type === 'INCOME'
          ? parseInt(prevState.income) +
            parseInt(
              this.transactionsList.filter(eachT => id === eachT.id).amount,
            )
          : prevState.income,
    }))
  }

  render() {
    const {income, expenses, transactionsList, title, amount, type} = this.state

    return (
      <div className="container">
        <div className="name-container">
          <h1>HI, Richard</h1>
          <p>
            Welcome back to your
            <span className="money-manager-text">Money Manager</span>
          </p>
        </div>
        <MoneyDetails income={income} expenses={expenses} />
        <div className="transaction-container">
          <div className="add-transaction">
            <h4 className="add-transaction-heading">Add Transaction</h4>
            <form className="add-form" onSubmit={this.addForm}>
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                className="title"
                value={title}
                id="title"
                onChange={this.onChangeTitle}
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                type="text"
                className="amount"
                value={amount}
                id="amount"
                onChange={this.onChangeAmount}
              />
              <label htmlFor="type">TYPE</label>
              <select id="type" value={type} onChange={this.onChangeType}>
                {transactionTypeOptions.map(eachType => (
                  <option value={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <div>
                <button type="submit" className="add-button">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="transaction-history">
            <ul>
              <li>
                <h4>History</h4>
              </li>
              <li className="table-head">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </li>
              {transactionsList.map(eachTrans => (
                <TransactionItem
                  transactionsList={eachTrans}
                  key={eachTrans.id}
                  onDeleteTransaction={this.onDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
