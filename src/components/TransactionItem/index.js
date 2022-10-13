import './index.css'

const Transaction = props => {
  const {transactionsList, onDeleteTransaction} = props
  const {title, amount, type, id} = transactionsList

  const deleteTransaction = () => {
    onDeleteTransaction(id)
  }
  return (
    <li className="table-content">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <p>
        <button type="button" className="delete-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-img"
            onClick={deleteTransaction}
            testid="delete"
          />
        </button>
      </p>
    </li>
  )
}

export default Transaction
