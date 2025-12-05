import React from 'react'
import Child from './Child'
import { useState,useCallback } from 'react'
const Parent = () => {
  const [count, setCount] = useState(0)

  // function handleClick (){
  // console.log("Clicked!");
  // setCount(count+1)
  // }

  const handleClick = useCallback(() => {
    console.log("Clicked!");
    // setCount(count+1)
    setCount(prev => prev + 1);
  }, [])

  // console.log(count,"count")

  return (
    <div>
      
      <h1>Parent Componet</h1>
      <h2>Count : {count}</h2>
      <Child handleClick={handleClick}/>
      {/* <button onClick={()=>setCount(count+1)}>Increment</button> */}

    </div>
  )
}

export default Parent