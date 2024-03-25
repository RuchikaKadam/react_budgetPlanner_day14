import React, { useContext } from 'react';
import { Context } from '../App';

const ShowExpense = () => {
  const { expenseData, setTotalExpense, setExpenseData } = useContext(Context);

  const handleDeleteExpense = (index) => {
    const deletedExpense = expenseData[index];
    setTotalExpense((prevTotal) => prevTotal - deletedExpense.price);
    setExpenseData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  return (
    <div className='ShowExpense_container'>
      <h2>Expenses</h2>
      {expenseData.map((expense, index) => (
        <div key={index} className='spendings'>
          <span>{expense.title}</span> 
          <span>{expense.price}</span>
          <button onClick={() => handleDeleteExpense(index)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default ShowExpense;
