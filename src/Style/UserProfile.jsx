import React from 'react'
/// without moodule css apply css globally
//import "./External.css"

import style from './UserProfile.module.css'; // Importing the CSS module


const UserProfile = () => {
  return (
    <div>
        {/* <h1 className='heading'>Style with Css Module</h1> */}
        <h1 className={style.heading}>Style with Module css</h1>
    <div>
         <img className={style.image} src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740" alt="" />
    </div>
    <div>
        <h1>M Anwar Arbi</h1>
        <p>Software Developer.</p>
        <p>Age: 24</p>
        <p>Location: Karachi, Pakistan</p>
        <p>Skills: React, Node.js, JavaScript</p>
    </div>
    </div>
  )
}

export default UserProfile