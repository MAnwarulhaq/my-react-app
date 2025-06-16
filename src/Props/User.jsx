import React from 'react'
import Props from './Props'
import College from './College'

const User = () => {
  let collegeName = ["Dhaka University", "BUET", "NSU", "IUB", "BRAC University"];
    const object={
        name: "Anwar",
        age: 25,
        city: "Dhaka"
    }
     const object1={
        name: "Faizan",
        age: 20,
        city: "Kukkar Hatta"
    }
  return (
    <div>
        {/* <Props name="Anwar" age={25} city="Dhaka"/> */}
        <College name={collegeName} />
        <Props users={object}/>
        <hr />
        <Props users={object1}/>
    </div>
  )
}

export default User