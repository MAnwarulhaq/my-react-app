import React, { useEffect, useRef } from 'react';

const UseRef = () => {

    const getName = useRef(null)
    const inputFocus = useRef(null)

    function handleName(e){
        e.preventDefault()
        alert("Your Name is"+" "+ getName.current.value)
        getName.current.value=""
        
    }

    useEffect(()=>{

          inputFocus.current.focus();
    },[])


    return (
        <div>
            <h4>useRef</h4>
            <input ref={(el)=>{
                inputFocus.current=el;
                getName.current = el;
            }}  type="text" placeholder='Enter your name' />
            <button onClick={handleName}>click me</button>
        </div>
    );
};

export default UseRef;
