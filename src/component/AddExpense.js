import React, { useContext, useRef } from 'react'
import {Context}  from './../App'

const AddExpense = () => {
    const titleRef = useRef();
    const priceRef = useRef();

    const {setExpenseData, setTotalExpense} = useContext(Context);

  return (
    <>
    <h2>Add Expenses</h2>
    <div className='add_cont'>
        <input ref={titleRef} placeholder='add expense here...' type='text'/>
        <input ref={priceRef} placeholder='amount spent..' type='number'/>
        <button 
            onClick={() =>{
                const title = titleRef.current.value;
                const price = parseInt(priceRef.current.value);
                setExpenseData(prevData => [...prevData,{title,price}])
                setTotalExpense(prevValue => price+prevValue)
                titleRef.current.value='';
                priceRef.current.value='';
            }}
        >Add</button>
    </div>
    </>
  )
}

export default AddExpense