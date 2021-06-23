import ExpensesList from './ExpensesList';
import { useState } from 'react';

const FinanceView = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');
  const [expenseItem, setExpenseItem] = useState('');
  console.log(expenses);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpenses = expenses.concat({ expenseItem, amount });
    setExpenses(newExpenses);
    setAmount('');
    setExpenseItem('');
  };

  const expenseChange = (e) => {
    setExpenseItem(e.target.value);
  };

  const amountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="finance-view-container">
      Finance View Container
      <div className="finance-input-container">
        <form action="submit" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="expense"
            placeholder="Expense"
            onChange={(e) => expenseChange(e)}
            value={expenseItem}
          />
          <input
            type="text"
            name="amount"
            placeholder="Amount"
            onChange={(e) => amountChange(e)}
            value={amount}
          />
          <button>Add</button>
        </form>
      </div>
      <ExpensesList expenses={expenses} />
    </div>
  );
};

export default FinanceView;
