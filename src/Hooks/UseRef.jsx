import React, { useRef } from 'react';

const UseRef = () => {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = 'lightblue';
        inputRef.current.style.color = 'red';
        inputRef.current.style.fontSize = '20px';
    };

    const toogleInput = () => {
        if (inputRef.current.style.display === 'none') {
            inputRef.current.style.display = 'block';
        } else {
            inputRef.current.style.display = 'none';
        }
    };

    return (
        <div>
            <h4>useRef</h4>
            <input ref={inputRef} type="text" placeholder='Enter your name' />
            <button onClick={focusInput}>Focus on input field</button>
            <button onClick={toogleInput}>Toggle input field</button>
        </div>
    );
};

export default UseRef;
