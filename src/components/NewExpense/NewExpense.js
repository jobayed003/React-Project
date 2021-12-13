import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const savedDataHandler = enteredData => {
    const expenses = { ...enteredData, id: Math.random().toString() };
    props.onAddingData(expenses);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onDataSave={savedDataHandler} />
    </div>
  );
};

export default NewExpense;
