
import React, { useContext } from 'react'
import {SubjectData} from "./CollegeData"

const Subject = () => {
    const subject=useContext(SubjectData)
  return (
    <div  style={{backgroundColor:"brown", padding:"20px"}}>
        <h1>Subject</h1>
    </div>
  )
}

export default Subject