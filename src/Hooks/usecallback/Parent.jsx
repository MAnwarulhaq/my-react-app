import React from 'react'
import Child from './Child'
import { useState,useCallback } from 'react'
const Parent = () => {
  const [count, setCount] = useState(0)
  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, [])

  return (
    <div>
      <Child handleClick={handleClick}/>
      <h1>Parent Componet</h1>
      <h2>Count : {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>

    </div>
  )
}

export default Parent