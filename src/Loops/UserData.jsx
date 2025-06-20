import React from 'react'

const UserData = ({user}) => {
  return (
    <div style={{border:"1px solid black", margin:"10px", padding:"10px"}}>
        
        <h1>Name: <span style={{color:"green"}}>{user.name}</span></h1>
        <h2>Age: <span style={{color:"blue"}}>{user.age}</span></h2>
        <h3>Email: <span style={{color:"red"}}>{user.email}</span></h3>
    </div>
  )
}

export default UserData