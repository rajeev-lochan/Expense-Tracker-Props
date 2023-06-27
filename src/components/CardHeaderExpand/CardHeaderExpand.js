import React, { useEffect, useState } from 'react';
import './CardHeaderExpand.css';

function CardHeaderExpand({ importDataDetail, reset, expenseDetail }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [titleError, setTitleError] = useState('');
  const [amountError, setAmountError] = useState('');
  const [dateError, setDateError] = useState('');

  useEffect(() => {
    if (expenseDetail) {
      setTitle(expenseDetail.title);
      setAmount(expenseDetail.amount.toString());
      setDate(expenseDetail.date);
    }
  }, [expenseDetail]);

  //validation 

  const handleTitleChange = (e) => {
    const titleValue = e.target.value;
    setTitle(titleValue);
    if (titleValue.trim().length !== 0) {
      setTitleError('');
    } else {
      setTitleError('*');
    }
  };
  
  const handleAmountChange = (e) => {
    const amountValue = e.target.value;
    setAmount(amountValue);
    if (amountValue.trim().length !== 0) {
      setAmountError('');
    } else {
      setAmountError('*');
    }
  };
  
  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    setDate(dateValue);
    if (dateValue.trim().length !== 0) {
      setDateError('');
    } else {
      setDateError('*');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!title || title.trim().length === 0) {
      setTitleError('*');
      isValid = false;
    }

    if (!amount || amount.trim().length === 0) {
      setAmountError('*');
      isValid = false;
    }

    if (!date || date.trim().length === 0) {
      setDateError('*');
      isValid = false;
    }

    if (isValid) {
      const obj = {
        id: Math.random() * 100,
        title: title,
        amount: +amount,
        date: new Date(date),
      };
      importDataDetail(obj);
      setTitle('');
      setAmount('');
      setDate('');
      reset();
    }
  };

  return (
    <div>
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Add Expense Title</label>
            <input type="text" value={title} onChange={handleTitleChange} />
            <span style={{ color: 'red' }}>{titleError}</span>
          </div>
          <div className="new-expense__control">
            <label>Add Expense Amount</label>
            <input type="number" min="1" value={amount} onChange={handleAmountChange} />
            <span style={{ color: 'red' }}>{amountError}</span>
          </div>
          <div className="new-expense__control">
            <label>Add Expense Date</label>
            <input type="date" value={date} onChange={handleDateChange} />
            <span style={{ color: 'red' }}>{dateError}</span>
          </div>
          <div className="new-expense__control">
            <button onClick={reset}>Cancel</button>
          </div>
          <div className="new-expense__control">
            <button type="submit" onClick={handleSubmit}>Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CardHeaderExpand;
