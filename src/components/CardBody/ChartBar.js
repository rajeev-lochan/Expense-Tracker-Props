import React from 'react'
import './ChartBar.css'
const ChartBar = ({maxExpenseMonth, label, value}) => {
    let barfilHeight = "0%";
    if(maxExpenseMonth > 0){
        barfilHeight = Math.round((value/maxExpenseMonth)*100)+'%'
    }
  return (
    <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height:barfilHeight}}></div>
            </div>
            <div className="chart-bar__label">{label}</div>
        </div>
  )
}
export default ChartBar;