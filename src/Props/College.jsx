import React from 'react'

const College = (props) => {
   
  return (
    <div>College Name
        <ul>
            {props.name.map((college, index) => (
            <li key={index}>{college}</li>
            ))}
        </ul>
        
    </div>
    
  )
}

export default College