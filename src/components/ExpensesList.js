const ExpensesList = ({ expenses }) => {
  const listExpenses = expenses.map((expense, index) => (
    <li key={index}>
      {expense.expenseItem}: {expense.amount}
    </li>
  ));

  return (
    <div className="expense-list-container">
      <ul>{listExpenses}</ul>
    </div>
  );
};

export default ExpensesList;
