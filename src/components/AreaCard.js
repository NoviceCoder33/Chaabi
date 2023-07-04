import React,{useState} from 'react';
import { Chart } from 'react-google-charts';
import {HiTrendingUp} from "react-icons/hi"; 
import styles from "./AreaCard.module.css";
export const data = [
    ["Day", ""],
    ["M", 0],
    ["T", 150],
    ["W", 50],
    ["Th", 60],
    ["F", 200],
    ["S", 10],
  ];
  
  export const options = {
    hAxis: { title: ["M","T","W","Th","F"] },
    vAxis: { minValue: 0 },
    chartArea: { width: "50%", height: "90px" },
    colors: ['#055e0e'],
  };

  export const optionss = {
    hAxis: { title: ["M","T","W","Th","F"] },
    vAxis: { minValue: 0 },
    chartArea: { width: "50%", height: "90px" },
    colors: ['#7d0c14'],
  };

export default function AreaCard({work,number,count,profit}) {
 return (

     <div className={styles.chart} id="chart">
       <p style={{fontSize:"12px"}}>{work}</p> 
       <div style={{display:"flex",gap:"1rem"}}>
        <div>
            <div style={{display:"flex",flexDirection:"column"}}>
            <h5>{number}</h5>
            {(profit === "true")?
            (<div id='profit'>   
             <div style={{display:"flex",fontSize:"10px",background:"#98d490"}}>
                <HiTrendingUp color='#055e0e'/>20%</div>
                <p style={{fontSize:"10px"}}>{count}</p>
              </div>  
            ):(
                <div id='profit' >   
                <div style={{display:"flex",fontSize:"10px",background:"#e8898f"}}>
                   <HiTrendingUp color='#7d0c14'/>20%</div>
                   <p style={{fontSize:"10px"}}>{count}</p>
                 </div>  
              )
             }
            </div>
        </div>  
        {(profit ==="true")?
        (<Chart
          chartType="AreaChart"
          width="120px"
          height="90px"
          data={data}
          options={options}
           />):(
          <Chart
          chartType="AreaChart"
          width="120px"
          height="90px"
          data={data}
          options={optionss}
           />
           )
           }
       </div>
   
     </div>
     )
}
