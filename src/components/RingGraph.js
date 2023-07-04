import React from 'react';
import ring from "../assets/ring.png";

export default function RingGraph() {
  return (
    <div style={{width:"250px",height:"210px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius: "0.5rem"}}>
        <img style={{width:"250px",height:"210px",borderRadius: "0.5rem"}} src={ring} alt="ring"/>
    </div>
  )
}
