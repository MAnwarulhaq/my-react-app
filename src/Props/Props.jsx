// What is props in React?
// Props in React JS (short for "properties") are a way to pass data from one component (usually parent) to another (usually child).
//Basic Example

// function Welcome(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

// function App() {
//   return <Welcome name="Anwar" />;
// }

//Explanation:
// App is the parent.
// Welcome is the child.
// name="Anwar" is a prop.
// Inside Welcome, we access it using props.name.

// Oneway 
// import React from 'react'
// const Props = (props) => {
//   return (
//     <div>
//       <h1>Props Example</h1>
//       <h2>My name is {props.name}</h2>
//       <h3>My age is {props.age}</h3>
//       <h4>My city is {props.city}</h4>
//     </div>
//   )
// }

// Using Destructuring
// const Props = ({ name, age, city }) => {
//   return (
//     <div>
//       <h1>Props Example</h1>
//       <h2>My name is {name}</h2>
//       <h3>My age is {age}</h3>
//       <h4>My city is {city}</h4>
//     </div>
//   );
// }

// Props pass through Object
const Props =({users})=>{
    
    return(
        <div>
            <h1>User Detail</h1>
            <h2>My name is {users.name}</h2>
            <h3>My age is {users.age}</h3>
            <h4>My city is {users.city}</h4>
            

        </div>
    )
}

export default Props