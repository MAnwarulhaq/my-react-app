import React from 'react'

const UserChildComponent = ({displayName,name}) => {
    // const name = 'Anwar';
    // const handleClick = () => {
    //     alert('Button clicked');
    // }
  return (
    <div>
        {/* <button onClick={displayName}>Click Me</button> */}
        <button onClick={()=>displayName(name)}> Click Me</button>
    </div>
  )
}

export default UserChildComponent