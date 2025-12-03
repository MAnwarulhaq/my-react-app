import React, { useRef } from 'react';

const UseRef = () => {

    const getName = useRef(null)

    function handleName(e){
        e.preventDefault()
        alert("Your Name is"+" "+ getName.current.value)
        
    }


    return (
        <div>
            <h4>useRef</h4>
            <input ref={getName} type="text" placeholder='Enter your name' />
            <button onClick={handleName}>click me</button>
        </div>
    );
};

export default UseRef;
