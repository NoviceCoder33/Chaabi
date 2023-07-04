import React from 'react';
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <div style={{marginLeft:"1rem",marginTop:"0.7rem"}}>
        <h2 style={{margin:"0"}}>Hello, Puneet Dhiman</h2>
        <div style={{margin:"0",fontSize:"12px"}}>following is your organization's performance summary</div>
        </div>
    </div>
  )
}
