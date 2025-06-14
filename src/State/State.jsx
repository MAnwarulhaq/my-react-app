import React from 'react'


// Wrong way to manage state in React

const State = () => {
    let fruits = "Apple";
    const changeFruits = () => {
        fruits = "Banana";
        console.log(fruits);
    }
  return (
    <div>
        <h1>What is State Management</h1>
        <h1>{fruits}</h1>
        <button onClick={changeFruits}>Change The fruit name</button>
    </div>
  )
}

export default State