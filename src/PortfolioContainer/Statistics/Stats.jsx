import React from 'react'


import stylestats from '../Statistics/stats.module.css'

const Stats = () => {
  return (
    <div className={stylestats.main}>
      <h1 className={stylestats.heading}>Statistic</h1>
      <br />
            <div style={{width:"100%",margin:"auto"}}>
            
            <img className={stylestats.img_div} src="https://i.ibb.co/V9tT9dk/Screenshot-203.png" alt="githubcalender" />
            </div>
        
    </div>
  )
} 

export default Stats