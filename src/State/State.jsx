import React from 'react'
import { useState } from 'react';



// State is a way to manage data that can change over time in a React component.

// Wrong way to manage state in React
// const State = () => {
//     let fruits = "Apple";
//     const changeFruits = () => {
//         fruits = "Banana";
//         console.log(fruits);
//     }
//   return (
//     <div>
//         <h1>What is State Management</h1>
//         <h1>{fruits}</h1>
//         <button onClick={changeFruits}>Change The fruit name</button>
//     </div>
//   )
// }

// Correct way to manage state in React
const State = () => {
    const [fruits, setFruits] = useState("Apple");
    const changeFruits = () => {
        setFruits("Banana");
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