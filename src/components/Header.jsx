import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../component/Style/header.module.css"

const Header = () => {
  return (
    <div>
      <div className={styles.headerbox1}>
        <img className={styles.headerimage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlC8Ce263q6wB-ygngoAv4o0f42mL0KGNH9aRIXBLZbjXwQFvT1sFATkdgMOx7spZttZY&usqp=CAU" alt="" />
        <Link style={{ textDecoration: "none" }} className={styles.headersign} to="/login">Sign Out</Link>

      </div>
    </div>
  )
}

export default Header