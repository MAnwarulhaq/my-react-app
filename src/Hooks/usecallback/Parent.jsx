import React from 'react'
import Child from './Child'
import { useState } from 'react'
const Parent = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
        <Child/>
        <h1>Parent Componet</h1>
        <h2>Count : {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>

    </div>
  )
}

export default Parent