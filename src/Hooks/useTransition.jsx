import React, { useState } from 'react'

const UseTransition = () => {

    // lengthy code using state
    const [pending,setPending]=useState(false)

    const disabledBtn= async()=>{
        setPending(true)
        await new Promise(res=>setTimeout(res,2000 ))
        setPending(false)
    }
    // 
  return (
    <div style={{alignItems:"center"}}>
        <h1>useTransition</h1>
        <button disabled={pending} onClick={disabledBtn}>Click me</button>
    </div>
  )
}

export default UseTransition