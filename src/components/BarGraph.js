import React from 'react';
import bars from "../assets/bars.png";

export default function BarGraph({width,bar}) {
  let days = "true";
  if(bar === "bar"){
    days = "false";
  }else{
    days = "true";
  }
  return (
    <div style={{width:{width},marginLeft:"0.5rem"}}>
      {(days==="true")?(
        <img style={{height:"210px",maxWidth:"750px",marginLeft:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius: "0.5rem"}} src={bars} alt='bargraph'/>
      ):(
        <div style={{backgroundColor:"white",borderRadius: "0.5rem"}}>
        <img style={{height:"210px",maxWidth:"550px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius: "0.5rem"}} src={bars} alt='bar'/>
        </div>
      )
      }
        </div>
  )
}
