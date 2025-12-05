import React, { memo } from 'react'

const Child = ({handleClick}) => {
    console.log("Child Component Rendered");
  return (
    <div>
        <h1>Child Component </h1>
        <button onClick={handleClick}>Increament</button>
    </div>
  )
}

export default memo( Child )