import React from 'react'
import './Chart.css'
import ChartBar from '../CardBody/ChartBar'
const 
Chart = ({monthData}) => {
    const monthExpenseValue = monthData.map((data)=>data.value);
    const maxExpenseMonth = Math.max(...monthExpenseValue)
  return (
    <div className="chart">
      {monthData.map((data)=>{
        return <ChartBar
        key={data.label}
        value={data.value}
        label={data.label}
        maxExpenseMonth={maxExpenseMonth}
        />
      })}
    </div>
  )
}
export default Chart;