import React, { useState } from 'react';
import './CardHeader.css';
import CardHeaderExpand from '../CardHeaderExpand/CardHeaderExpand';

function CardHeader({ importData, clear }) {
  const [showExpand, setShowExpand] = useState(true);

  const expandForm = () => {
    setShowExpand(!showExpand);
  };

  const importDataValue = (data) => {
    data = {
      ...data,
      id: Math.random() * 100,
    };
    importData(data);
  };

  const resetExpandForm = () => {
    setShowExpand(true);
  };

  return (
    <div>
      {showExpand ? (
        <div className="new-expense">
          <button onClick={expandForm}>Add Expense</button>
          <button onClick={clear}>Clear Data</button>
        </div>
      ) : (
        <div className="new-expense">
          <CardHeaderExpand importDataDetail={importDataValue} reset={resetExpandForm} />
        </div>
      )}
    </div>
  );
}

export default CardHeader;
