import React from 'react';
import styles from "./RadioCard.module.css";
import { FaArrowUp,FaRegCircle } from "react-icons/fa6";

export default function RadioCard({}) {
  return (
    <div className={styles.radio}>
        <p style={{fontSize:"12px"}}>Monthly Training Activity</p>
        <div style={{fontSize:"5px"}}><FaArrowUp size={1}/> 16% more enrollees this month </div>
        <div style={{display:"flex", justifyContent:"center",gap:"0.5rem",marginTop:"1rem"}}>
            <FaRegCircle size={6}/>    
        <div style={{display:"flex",flexDirection:"column"}}>
          <p style={{fontSize:"5px",fontWeight:"bold"}}>Course a</p>
          <p style={{fontSize:"5px",marginTop:"0rem"}}>253 workers took this course this week</p>
        </div>
        </div>
        <div style={{display:"flex", justifyContent:"center",gap:"0.5rem"}}>
            <FaRegCircle size={6}/>    
        <div style={{display:"flex",flexDirection:"column"}}>
          <p style={{fontSize:"5px",fontWeight:"bold"}}>Course b</p>
          <p style={{fontSize:"5px"}}>23 workers took this course this week</p>
        </div>
        </div>
        <div style={{display:"flex", justifyContent:"center",gap:"0.5rem"}}>
            <FaRegCircle size={6}/>    
        <div style={{display:"flex",flexDirection:"column"}}>
          <p style={{fontSize:"5px",fontWeight:"bold"}}>Course c</p>
          <p style={{fontSize:"5px"}}>253 workers took this course this week</p>
        </div>
        </div>
        <div style={{display:"flex", justifyContent:"center",gap:"0.5rem"}}>
            <FaRegCircle size={6}/>    
        <div style={{display:"flex",flexDirection:"column"}}>
          <p style={{fontSize:"5px",fontWeight:"bold"}}>Course d</p>
          <p style={{fontSize:"5px"}}>253 workers took this course this week</p>
        </div>
        </div>
    </div>
  )
}
