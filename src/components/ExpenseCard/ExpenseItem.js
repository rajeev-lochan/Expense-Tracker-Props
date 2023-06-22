import React, { useState } from 'react';
import './ExpenseItem.css';
import Card from '../CardUI/Card';
import ExpanseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';

const ExpenseItem = ({ id, date, title, amount, updateTitle, updateAmount }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedAmount, setUpdatedAmount] = useState(amount);
  const [titleError, setTitleError] = useState('');
  const [amountError, setAmountError] = useState('');

  const handleTitleChange = (e) => {
    setUpdatedTitle(e.target.value);
    setTitleError('');
  };

  const handleAmountChange = (e) => {
    setUpdatedAmount(+e.target.value);
    setAmountError('');
  };

  const handleUpdate = () => {
    let isValid = true;

    if (!updatedTitle || updatedTitle.trim().length === 0) {
      setTitleError('*');
      isValid = false;
    }

    if (!updatedAmount || isNaN(updatedAmount) || updatedAmount <= 0) {
      setAmountError('*');
      isValid = false;
    }

    if (isValid) {
      setIsUpdate(false);
      updateAmount(id, updatedAmount, updatedTitle);
    }
  };

  const handleCancel = () => {
    setUpdatedTitle(title);
    setUpdatedAmount(amount);
    setIsUpdate(false);
    setTitleError('');
    setAmountError('');
  };

  return (
    <div>
      <Card className="expense-item">
        <ExpanseDate expenseDate={date} />
        <ExpenseDetail
          update={() => setIsUpdate(true)}
          title={title}
          amount={amount}
          updateTitle={(newTitle) => updateTitle(newTitle)}
          updateAmount={(newAmount) => setUpdatedAmount(newAmount)}
        />
      </Card>
      {isUpdate && (
        <div>
          <input type="text" value={updatedTitle} onChange={handleTitleChange} />
          <span style={{ color: 'red' }}>{titleError}</span>
          <input type="number" value={updatedAmount} onChange={handleAmountChange} />
          <span style={{ color: 'red' }}>{amountError}</span>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ExpenseItem;
