import React from 'react'
import { useState } from 'react';
 

// Only Hide in this code
// const Toggle = () => {
//     const [isVisible, setIsVisible] = useState(true);
//   return (
//     <div>
//         <h1>Toggle Hide and Show</h1>
//         {
//             isVisible ? <h1>Toggle is Visible</h1> : <h1>Not found</h1>
//         }
//         <button onClick={()=>setIsVisible(false)}>Hide and Show</button>
        
//     </div>
//   )
// }

// in this toogle hide and show work both

const Toggle = () => {
    const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
        <h1>Toggle Hide and Show</h1>
        {
            isVisible ? <h1>Toggle is Visible</h1> : <h1>Not found</h1>
        }
        <button onClick={()=>setIsVisible(!isVisible)}>Hide and Show</button>
        
    </div>
  )
}

export default Toggle