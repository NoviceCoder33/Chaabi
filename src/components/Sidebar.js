import React from 'react';
import logo from "../assets/Logo.png";
import styles from "./Sidebar.module.css";
import { FaMicrosoft,FaTicketAlt } from "react-icons/fa";
import { FaLocationDot,FaGamepad } from "react-icons/fa6";


export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <div className={styles.dashboradLogo}>
            <img className={styles.logo} src={logo} alt='chaabi'/>
        </div>
        <div>
            <div className={styles.icons}><FaMicrosoft/> <p style={{marginLeft:"0.5rem"}}>Dashboard</p></div>
            <div className={styles.icons}><FaGamepad/> <p style={{marginLeft:"0.5rem"}}>Training</p></div>
            <div className={styles.icons}><FaTicketAlt/> <p style={{marginLeft:"0.5rem"}}>Users</p></div>
            <div className={styles.icons}><FaLocationDot/> <p style={{marginLeft:"0.5rem"}}>Analytics</p></div>
            <div className={styles.icons}><FaLocationDot/> <p style={{marginLeft:"0.5rem"}}>My Account</p></div>
            <div className={styles.icons}><FaLocationDot/> <p style={{marginLeft:"0.5rem"}}>Support</p></div>
            
        </div>
    </div>
  )
}
