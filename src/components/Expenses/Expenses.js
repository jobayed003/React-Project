import React, { useState } from 'react/cjs/react.development';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
{filteredExpenses.length > 0 &&
  filteredExpenses.map(e => (
    <ExpenseItem
      key={e.id}
      title={e.title}
      amount={e.amount}
      date={e.date}
    />
  ))} */
