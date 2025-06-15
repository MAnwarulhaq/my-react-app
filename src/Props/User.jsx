import React from 'react'
import Props from './Props'

const User = () => {
    const object={
        name: "Anwar",
        age: 25,
        city: "Dhaka"
    }
  return (
    <div>
        <Props users={object}/>
    </div>
  )
}

export default User