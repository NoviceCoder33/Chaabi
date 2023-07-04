import React from 'react';
import circular from "../assets/circle.png";

export default function CircularGraph() {
  return (
    <div>
        <img style={{ width:"210px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius: "0.5rem",height:"210px"}} src={circular} alt='circulargraph'/>
    </div>
  )
}
