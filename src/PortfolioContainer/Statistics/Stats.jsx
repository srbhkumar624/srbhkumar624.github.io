import React from 'react'


import stylestats from '../Statistics/stats.module.css'

const Stats = () => {
  return (
    <div className={stylestats.main}>
      <div className={stylestats.main}>
      <h1 className={stylestats.heading}>Statistic</h1>
      <br />
        <img className={stylestats.image} src="https://github-readme-stats.vercel.app/api?username=srbhkumar624&show_icons=true&locale=en" alt="" />
            <br />
            <br />
            <img className={stylestats.image} src="https://github-readme-streak-stats.herokuapp.com/?user=srbhkumar624&" alt="" />
            <br />  
            <h1 className={stylestats.heading}>Github Calender</h1>
            <br />
            <div style={{width:"80%",margin:"auto"}}>
              {/* <Calender/> */}
            <img className={stylestats.img_div} style={{width:"100%"}} src="https://i.ibb.co/SQgxqSS/Screenshot-203.png" alt="" />
            </div>
            </div>
        
    </div>
  )
} 

export default Stats