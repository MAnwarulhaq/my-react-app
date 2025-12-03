
import React, { useContext } from 'react'
// import {SubjectData} from "./CollegeData"
import { SubjectData } from './ContextApi'

const Subject = () => {
    const subject=useContext(SubjectData)
  return (
    <div  style={{backgroundColor:"brown", padding:"20px"}}>
        <h1>Subject:{subject}</h1>
    </div>
  )
}

export default Subject