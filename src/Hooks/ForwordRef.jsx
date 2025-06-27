import React from 'react'
import ForwordRef1 from './ForwordRef1'

const ForwordRef = () => {
    const inputRef = React.useRef(null);
    const handleClick = () => {
        inputRef.current.value = 'Updated Value';
        inputRef.current.style.backgroundColor = 'lightgreen';
        inputRef.current.style.color = 'blue';
        inputRef.current.style.fontSize = '18px';
    }
  return (
    <div style={{margin: '20px'}}>
        <h1>Parent Component</h1>
       <ForwordRef1 ref={inputRef}/>
        <br />
        <br />
        <button onClick={handleClick}>Update Input Field</button>
    </div>
  )
}

export default ForwordRef