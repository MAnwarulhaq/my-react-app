import React from 'react'

const InlineStyle = () => {

    const headingStyle = {
        color: "red",
        fontSize: "90px"
    };

  return (
    <div>
        <h1 style={headingStyle}>Anwar</h1>
        <p style={{color:"blue",fontSize:"30px"}}>This is a paragraph with inline styles.</p>
        <button style={{backgroundColor:"green",color:"white",padding:"10px 20px",border:"none",borderRadius:"5px",cursor:"pointer"}}>Click Me</button>
    </div>
  )
}

export default InlineStyle