
import React, { useState } from 'react';

const ExpenseInput = ({ onAddExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleAddExpense = () => {
    if (!name.trim() || !amount.trim() || !date.trim()) return;
    onAddExpense({ name, amount: parseFloat(amount), date });
    setName('');
    setAmount('');
    setDate('');
  };

  return (
    <div>
      <label htmlFor="expense">Expense Name</label>
      <input
        type="text"
        id="expense"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter expense name"
      />
      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button className='button' onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default ExpenseInput;





