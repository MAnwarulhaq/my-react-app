import React, { useState } from 'react'
import CollegeInfo from './CollegeInfo'
import { SubjectData } from './CollegeData'
const ContextApi = () => {
  const [subjectInfo,setSubjectInfo]=useState("")
  return (
    <div style={{backgroundColor:"orange", padding:"20px"}}>
        <SubjectData.Provider value={subjectInfo}>
          <select value={subjectInfo} name="" id="" onChange={(e)=>setSubjectInfo(e.target.value)}>
            <option value="">Select Subject</option>
            <option value="Math">MAth</option>
            <option value="English">English</option>
            <option value="urdu">Urdu</option>
            <option value="Islamiat">Islamiat</option>
          </select>
          <h1>Context Api</h1>
          <button onClick={()=> setSubjectInfo("")}>Clear Subject</button>
        <CollegeInfo/>
        </SubjectData.Provider>
    </div>
  )
}

export default ContextApi