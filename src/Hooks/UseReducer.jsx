import { type } from '@testing-library/user-event/dist/type';
import React from 'react'

 const emptyData = {
        name: "",
        email: "",
        age: "",
        city: "",
        password: ""
    }
const reducer = (state, action) => {
    console.log("Reducer called with action:", action);
}

const UseReducer = () => {
    const [state, dispatch] = React.useReducer(reducer,emptyData)
   
  return (
    <div>
        <h1>useReducer</h1>
        <input type="text" name="" id="" placeholder='Enter your name' onChange={(event)=>dispatch({val:event.target.value,type:"name"})} /><br /><br />
        <input type="text" name="" id="" placeholder='Enter your email' onChange={(event)=>dispatch({val:event.target.value,type:"email"})}/><br /><br />
        <input type="text" name="" id="" placeholder='Enter your age'  onChange={(event)=>dispatch({val:event.target.value,type:"age"})}/><br /><br />
        <input type="text" name="" id="" placeholder='Enter your city name'  onChange={(event)=>dispatch({val:event.target.value,type:"city"})}/><br /><br />
        <input type="text" name="" id="" placeholder='Enter yuor password' onChange={(event)=>dispatch({val:event.target.value,type:"password"})}/><br /><br />
        <button>Submit</button>
    </div>
  )
}

export default UseReducer