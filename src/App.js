import './App.css';
import { useState, createContext } from 'react';
import AddExpense from './component/AddExpense';
import Overview from './component/Overview';
import ShowExpense from './component/ShowExpense';

export const Context = createContext();

function App() {
  const [totalExpense, setTotalExpense] = useState(0);
  const [expenseData, setExpenseData] = useState([]);

  
  return (
    <Context.Provider value = {{totalExpense,setTotalExpense, expenseData, setExpenseData}}>
      <div className='main_con'>
      {/* <Overview totalExpense={totalExpense} /> */}
      <Overview/>
      {/* <ShowExpense expenseData={expenseData} /> */}
      <ShowExpense/>
      {/* <AddExpense setTotalExpense={setTotalExpense} setExpenseData={setExpenseData} /> */}
      <AddExpense />
    </div>
    </Context.Provider>
  );
}

export default App;
