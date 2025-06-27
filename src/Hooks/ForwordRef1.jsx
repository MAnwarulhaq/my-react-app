import React from 'react'
import { forwardRef } from 'react';

//old forward ref code
// const ForwordRef1 = ((props, ref) => {
//   return (
//     <div>
//       <h1> Child Component</h1>
//       <input type="text" name="" id="" ref={ref} />
//     </div>
//   )
// });

// export default forwardRef(ForwordRef1);


// new forward ref code
const ForwordRef1 = ({ref}) => {
  return (
    <div>
        <h1> Child Component</h1>
         <input type="text" name="" id="" ref={ref}/>
    </div>
  )
}

export default  ForwordRef1