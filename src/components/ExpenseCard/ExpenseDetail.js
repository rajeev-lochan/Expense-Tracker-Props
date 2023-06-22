import React from 'react';
import './ExpenseItem.css';

const ExpenseDetail = ( { title, amount, update }) => {
  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">₹ {amount}</div>
      <button className="expense-item__title" onClick={() => update(true)}>
        Change Title
      </button>
      <button className="expense-item__title" onClick={() => update(true)}>Change Amount</button>
    </div>
  );
};

export default ExpenseDetail;
