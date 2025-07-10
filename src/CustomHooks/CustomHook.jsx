import React from 'react'
import useToggle from "./useToggle"

const CustomHook = () => {
    const [value,toggleValue]=useToggle(true)
    const [data,setData]=useToggle(true)
    // console.log(value)
  return (
    <div>
        <button onClick={toggleValue}>Toogle Heading</button>
        <button onClick={()=>toggleValue(false)}>Hide</button>
        <button onClick={()=>toggleValue(true)}>Show</button>
        {
            value? <h1>Custom Hooks In React</h1>: null
        }
        <hr />
         <button onClick={setData}>Toogle Heading</button>
        <button onClick={()=>setData(false)}>Hide</button>
        <button onClick={()=>setData(true)}>Show</button>
        {
            data? <h1>Data In React</h1>: null
        }
       
    </div>
  )
}

export default CustomHook