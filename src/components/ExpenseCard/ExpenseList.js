import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem';
const ExpenseList = ({ updatedData, updateTitle, updateAmount }) => {
    
    return (
        <div>
            {updatedData.length > 0 ? updatedData.length === 1 ? (
                <ul className="expenses-list">
                    {updatedData.map((data, index) => (
                        <div key={index}>
                            <ExpenseItem
                                key={data.id}
                                id={data.id}
                                title={data.title}
                                amount={data.amount}
                                date={data.date}
                                updateTitle={updateTitle} 
                                updateAmount={updateAmount}
                            />
                        </div>
                    ))}
                    <div className="expenses-list__fallback">One item found, Add more...</div>
                </ul>
            ) : <ul className="expenses-list">
                {updatedData.map((data, index) => (
                    <div key={index}>
                        <ExpenseItem
                            key={data.id}
                            id={data.id}
                            title={data.title}
                            amount={data.amount}
                            date={data.date}
                            updateTitle={updateTitle} 
                            updateAmount={updateAmount}
                        />
                    </div>
                ))}
            </ul> : (
                <div className="expenses-list__fallback">No items found</div>
            )}
        </div>
    )
}
export default ExpenseList;
