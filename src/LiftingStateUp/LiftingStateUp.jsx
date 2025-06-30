import React from 'react'
import AddUser from './AddUser'
import DisplayUser from './DisplayUser'
import { useState } from 'react'

// Lifting State Up to use data transform form one Child to other Child

const LiftingStateUp = () => {
   const [user,setUser]=useState("")
   console.log(user)
  return (
    <div>
        <AddUser setUser={setUser}/>
        <DisplayUser users={user}/>
    </div>
  )
}

export default LiftingStateUp