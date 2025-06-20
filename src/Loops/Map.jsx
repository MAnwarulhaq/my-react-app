import React from 'react'

const Map = () => {
    // array name
    const arr=["apple","banana","orange","mango","grapes"]
    // array of objects with name and age email
    const arrObj = [
        { name: "John", age: 25, email: "john@gmail.com", id:1},
        { name: "Jane", age: 30, email: "janegmail.com",id:2},
        { name: "Doe", age: 22, email: "deo@gmail.com" ,id:3},
        { name: "Smith", age: 28, email: "smith@gmail.com" ,id:4},
        { name: "Alice", age: 27, email: "alice@gmail.com", id:5}]
  return (
    <div>
        <h3>Loop in jsx Map funtion</h3>
    <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>Email</td>
            </tr>
        </thead>
        <tbody>
            {
                arrObj.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.email}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    </div>
  )
}

export default Map