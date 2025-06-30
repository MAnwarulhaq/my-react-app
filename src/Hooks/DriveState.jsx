import React, { useState } from 'react'

const DriveState = () => {
    const [users,setUsers]=useState([])
    const [user,setUser]=useState("")
    const handleUser=()=>{
        setUsers([...users,user])
        setUser("")
    }
    const total=users.length
    const lastUser=users[users.length-1]
    const UniqueUser=[...new Set(users)].length
  return (
    <div>
        <h1>Drive State </h1>
        <h1>Total Users={total}</h1>
        <h1>Last Users={lastUser}</h1>
        <h1>Unique Users={UniqueUser}</h1>
        <input type="text" onChange={(e)=>setUser(e.target.value)} value={user} />
        <br /><br />
        <button onClick={handleUser}>Save</button>
        {
            users.map((item,index)=>{
              return  <h1 key={index}>{item}</h1>
            })
        }
    </div>
  )
}

export default DriveState