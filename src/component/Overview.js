import React, { useContext } from 'react'
import { Context } from '../App';

const Overview = () => {
    const budget = 2000;
    const {totalExpense} = useContext(Context)

  return (
    <>
    <h1>My Budget Planner</h1>
    <div className='oveview_container'>
        <div className='overview_single'><span>Budget   :</span>   {budget}</div>
        <div className='overview_single'><span>Remaining   :</span>   {budget - totalExpense} </div>
        <div className='overview_single'><span>Spent So Far   :</span>   {totalExpense} </div>
    </div>
    </>
  )
}

export default Overview