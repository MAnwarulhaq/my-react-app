import React from 'react'
// defult props in react

const UserData = ({name="New User"}) => {
  return (
    <div> 
        
        <h1>Hi!,{name}</h1>
        

    </div>
  )
}

export default UserData