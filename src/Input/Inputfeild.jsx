import React from 'react'

const Inputfeild = () => {
    const [inputValue, setInputValue] = React.useState("");
    
  return (
    <div>
        <h1>Get input value</h1>
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <br />

       <h1> {inputValue}</h1>
        <br />
        <button onClick={()=>setInputValue("")}>Clear</button>
    </div>
  )
}

export default Inputfeild