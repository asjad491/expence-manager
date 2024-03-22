import React, { useState } from 'react';
import BudgetInput from './components/BudgetInput'
import ExpenseInput from './components/ExpenceInput';
import ExpenseList from './components/ExpenceList'
import './App.css';

const App = () => {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);


  const handleBudgetChange = (budget) => {
    setBudget(parseFloat(budget));
  };

  const handleAddExpense = (expense) => {
    if (expense.amount > budget - totalExpense) {
      alert('The expense amount exceeds the remaining budget.');
      return;
    }
    setExpenses([...expenses, expense]);
    setTotalExpense(totalExpense + expense.amount);
  };

  const handleDeleteExpense = (index) => {
    const deletedExpense = expenses[index];
    setExpenses(expenses.filter((_, i) => i !== index));
    setTotalExpense(totalExpense - deletedExpense.amount);
  };

  const handleEditExpense = (index, updatedExpense) => {
    const oldExpenseAmount = expenses[index].amount;
    const newExpenseAmount = updatedExpense.amount;
    const difference = newExpenseAmount - oldExpenseAmount;

    if (newExpenseAmount > budget - (totalExpense - oldExpenseAmount)) {
      alert('The edited expense amount exceeds the remaining budget.');
      return;
    }

    setExpenses(expenses.map((expense, i) => {
      if (i === index) {
        return {
          ...expense,
          name: updatedExpense.name,
          amount: newExpenseAmount
        };
      }
      return expense;
    }));

    setTotalExpense(totalExpense + difference);
  };

  return (
   <>
   
    <div className="container">
   <h2>Expense Tracker</h2>
   <BudgetInput onBudgetChange={handleBudgetChange} />
   <ExpenseInput onAddExpense={handleAddExpense} />
   <div className="totalbudget">Total Budget per Month: Rs {budget}.00 </div>
   <div className="total">Total Expense: Rs {totalExpense.toFixed(2)}</div>
   <div className="total">Remaining Budget: Rs {(budget - totalExpense).toFixed(2)}</div>
   <ExpenseList
     expenses={expenses}
     setExpenses={setExpenses}
     onDeleteExpense={handleDeleteExpense}
     onEditExpense={handleEditExpense}
     setTotalExpense={setTotalExpense}  />

 </div>
 </>
    
  );
};

export default App;
