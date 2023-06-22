import { useEffect, useState } from 'react';
import ExpenseFilter from '../ExpenseCard/ExpenseFilter';
import './CardBody.css'
import ExpenseList from '../ExpenseCard/ExpenseList';
import Card from '../CardUI/Card'
import ExpenseChart from '../ExpenseCard/ExpenseChart';

const CardBody = ({ updatedData, updateTitle, updateAmount }) => {

    // console.log("updateDetails",updateDetails);

    const [year, setYear] = useState("2023");
    const [filterExpenseList, setFilterExpenseList] = useState([])

    const handleFilterYear = (selectedYear)=>{
        setYear(selectedYear);
    }
    console.log(year)

    useEffect(()=>{
        const filterExpenses = updatedData.filter((item)=>{
            return item.date.getFullYear().toString() === year;            
        });
        setFilterExpenseList(filterExpenses)
    },[updatedData, year])

    return (
        <Card className="expenses">
            <ExpenseFilter filteredYear={year} onChangeFilterYear={handleFilterYear}/>
            <ExpenseChart expenseChart={filterExpenseList}/>
            <ExpenseList updatedData={filterExpenseList} updateTitle={updateTitle} updateAmount={updateAmount}/>
        </Card>
    );
};

export default CardBody;