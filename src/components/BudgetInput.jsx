import React, { useState } from 'react';

const BudgetInput = ({ onBudgetChange }) => {
  const [budget, setBudget] = useState('');

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
    onBudgetChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="budget">Your Monthly Budget</label>
      <input
        type="number"
        id="budget"
        value={budget}
        onChange={handleBudgetChange}
        placeholder="Enter your total budget"
      />
    </div>
  );
};

export default BudgetInput;