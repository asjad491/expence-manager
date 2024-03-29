import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import ReactFileReader from 'react-file-reader';
import axios from 'axios';

const ExpenseList = ({ expenses, setExpenses, onDeleteExpense, onEditExpense, setTotalExpense }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedAmount, setEditedAmount] = useState('');

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditedName(expenses[index].name);
    setEditedAmount(expenses[index].amount);
  };

  const handleSaveEdit = () => {
    if (!editedName.trim() || !editedAmount.trim()) return;
    onEditExpense(editIndex, { name: editedName, amount: parseFloat(editedAmount), date: expenses[editIndex].date });
    setEditIndex(null);
    setEditedName('');
    setEditedAmount('');
  };

  const handleSaveAsTxt = () => {
    const expenseText = expenses.map(expense => `Name: ${expense.name}  Amount: ${expense.amount.toFixed(2)}  Date: ${expense.date}`).join('\n');
    const data = `Expense List:\n${expenseText}`;
    const blob = new Blob([data], { type: 'text/plain' });
    saveAs(blob, 'expense_list.txt');
  };

  const handleSaveToDatabase = async () => {
    const fileName = prompt('Enter file name to save expenses:');
    if (fileName) {
      try {
        await axios.post('https://backend-production-ee92.up.railway.app/api/save-expenses', {
          filename: fileName,
          expenses: expenses
        });
        alert('Expenses saved to the database successfully!');
      } catch (error) {
        console.error('Error saving expenses:', error);
        alert('An error occurred while saving expenses. Please try again later.');
      }
    }
  };

  const handleRetrieveFromDatabase = async () => {
    const fileName = prompt('Enter file name to retrieve expenses:');
    if (fileName) {
      try {
        const response = await axios.get('https://backend-production-ee92.up.railway.app/api/get-expenses', {
          params: { filename: fileName }
        });
        const data = response.data;
        const importedExpenses = data.map(item => ({
          name: item.expensename,
          amount: item.amount,
          date : item.date.trim()
        }));
        setExpenses(importedExpenses);
        const totalExpenseFromImport = importedExpenses.reduce((total, expense) => total + expense.amount, 0);
        setTotalExpense(totalExpenseFromImport);
        alert('Expenses retrieved successfully!');
      } catch (error) {
        console.error('Error retrieving expenses:', error);
        alert('An error occurred while retrieving expenses. Please try again later.');
      }
    }
  };
  

  const handleFiles = (files) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      try {
        const lineRegex = /Name:\s*(.+?)\s*Amount:\s*([\d.]+)\s*Date:\s*(.+)/g;
        const importedExpenses = [];
        let match;
        while ((match = lineRegex.exec(content)) !== null) {
          const name = match[1].trim();
          const amount = parseFloat(match[2]);
          const date = match[3].trim();
          importedExpenses.push({ name, amount, date });
        }
        const totalExpenseFromImport = importedExpenses.reduce((total, expense) => total + expense.amount, 0);
        setTotalExpense(totalExpenseFromImport);
        setExpenses(importedExpenses);
      } catch (error) {
        console.error("Error processing file content:", error);
      }
    };
    reader.readAsText(files[0]);
  };
  
  return (
    <>
      <div className="history">
        <h3>Your Expenses:</h3>
        <table className="expense-table">
          <thead>
            <tr>
              <th>Expense Name</th>
              <th>Expense Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                {editIndex === index ? (
                  <>
                    <td>
                      <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={editedAmount}
                        onChange={(e) => setEditedAmount(e.target.value)}
                      />
                    </td>
                    <td colSpan="2">
                      <button className='save-btn' onClick={handleSaveEdit}>Save</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{expense.name}</td>
                    <td>Rs -{expense.amount.toFixed(2)}</td>
                    <td>{expense.date}</td>
                    <td>
                      <button className='edit-btn' onClick={() => handleEditClick(index)}>Edit</button>
                      <button className='delete-btn' onClick={() => onDeleteExpense(index)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="button-container">


{/*         <button className="saveas-btn" onClick={handleSaveAsTxt}>
          Save as txt
        </button>
        <ReactFileReader handleFiles={handleFiles} fileTypes={[".txt"]}>
          <button className="blue-btn">Import File</button>
        </ReactFileReader> */}


        <div className="btngroup">
        <button className="saveto-btn" onClick={handleSaveToDatabase}>
          Save to DB
        </button>
        <button className="saveto-btn" onClick={handleRetrieveFromDatabase}>
          Import
        </button>
        </div>
      </div>
    </>
  );
};
   
export default ExpenseList;
