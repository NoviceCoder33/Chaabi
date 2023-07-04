import React from 'react';
import styles from "./Landing.module.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AreaCard from '../components/AreaCard';
import CircularGraph from "../components/CircularGraph";
import BarGraph from "../components/BarGraph";
import RadioCard from '../components/RadioCard'; 
import RingGraph from "../components/RingGraph";
export default function Landing() {
    return (
        <div className={styles.landing}>
            <Sidebar/>
            <div style={{display:"flex",flexDirection:"column",backgroundColor:"#E7EFFF"}}>
                <Navbar/>
                <div style={{display:"flex",flexWrap:"wrap",gap:"15px",margin:"1rem"}}>
                <AreaCard work="in training workers" count="234" number="3,354" profit="true"/>
                <AreaCard work="Video Watch Time(Hrs)" count="435" number="2,433" profit="false"/>
                <AreaCard work="% Workers Passing Quiz" count="24%" number="95%" profit="true"/>
                <AreaCard work="Average Days Taken" count="3" number="6" profit="true"/>

                <CircularGraph/>
                <BarGraph bar="bars" width="900px"/>
                
                <RadioCard/>
                <RingGraph/>
                <BarGraph bar="bar" width="600px"/>
                <CircularGraph/>
                </div>
                
            </div>
        </div>
      );
}
