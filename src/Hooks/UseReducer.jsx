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
    // console.log("Reducer called with action:", action);
    return { ...state, [action.type]: action.val };
}

const UseReducer = () => {
    const [state, dispatch] = React.useReducer(reducer, emptyData)
    console.log("State:", state);

    return (
        <div>
            <h1>useReducer</h1>
            <input type="text" name="" id="" placeholder='Enter your name' onChange={(event) => dispatch({ val: event.target.value, type: "name" })} /><br /><br />
            <input type="text" name="" id="" placeholder='Enter your email' onChange={(event) => dispatch({ val: event.target.value, type: "email" })} /><br /><br />
            <input type="text" name="" id="" placeholder='Enter your age' onChange={(event) => dispatch({ val: event.target.value, type: "age" })} /><br /><br />
            <input type="text" name="" id="" placeholder='Enter your city name' onChange={(event) => dispatch({ val: event.target.value, type: "city" })} /><br /><br />
            <input type="text" name="" id="" placeholder='Enter yuor password' onChange={(event) => dispatch({ val: event.target.value, type: "password" })} /><br /><br />
            <button>Submit</button>{
                <ul>
                    <li>Name:{state.name}</li>
                    <li>Email{state.email}</li>
                    <li>Age{state.age}</li>
                    <li>City{state.city}</li>
                    <li>Password{state.password}</li>
                </ul>
            }
        </div>
    )
}

export default UseReducer