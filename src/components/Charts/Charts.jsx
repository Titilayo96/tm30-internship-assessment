import React from 'react'
import './Charts.css'
import PieChart from 'react-pie-graph-chart';

const  Charts = () => {
  return (
    <div className='charts'>
        <h3 className='question'>Why do you create a startup?</h3>
        <p className='note'>Trends</p>
        <div className="">
        <PieChart data={[
    {
      type: "Dunno",
      value: 90,
      color: "#ACB9FF"
    },
    {
      type: "I'm Boring",
      value: 450,
      color: "#855CF8"
    },
    {
      type: "Money",
      value: 90,
      color: "#263238"
    },
    {
      type: "Fun",
      value: 90,
      color: "#E289F2"
    }
  ]} />
        </div>
    </div>
  )
}

export default  Charts