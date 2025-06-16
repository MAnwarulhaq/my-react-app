import React, { use } from 'react'
import Props from './Props'
import College from './College'
import StudentName from './StudentName'
import UserData from './UserData'
import Wraper from './Wraper'
import { useState } from 'react'

const User = () => {
  let collegeName = ["Dhaka University", "BUET", "NSU", "IUB", "BRAC University"];
  const object = {
    name: "Anwar",
    age: 25,
    city: "Dhaka"
  }
  const object1 = {
    name: "Faizan",
    age: 20,
    city: "Kukkar Hatta"
  }

  const [firstName, setFirstname] = useState();;

  return (
    <div>
    <Wraper >
      <h1>Hi! Anwar</h1>
    </Wraper>
     <Wraper >
      <h1>Hi! Faizan</h1>
    </Wraper>
      
      <UserData name="Anwar" />
       <UserData  />
      <hr />
      {/* <Props name="Anwar" age={25} city="Dhaka"/> */}
      <College name={collegeName} studentname={firstName} />
      {firstName && <StudentName studentname={firstName} />}

      <button onClick={() => { setFirstname("Faizan") }}>Student Name</button>
      <hr />
      <Props users={object} />
      <hr />
      <Props users={object1} />
    </div>
  )
}

export default User