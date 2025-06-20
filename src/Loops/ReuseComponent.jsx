import React from 'react'
import UserData from './UserData'

const ReuseComponent = () => {
    const arrObj = [
        { name: "John", age: 25, email: "john@gmail.com", id: 1 },
        { name: "Jane", age: 30, email: "janegmail.com", id: 2 },
        { name: "Doe", age: 22, email: "deo@gmail.com", id: 3 },
        { name: "Smith", age: 28, email: "smith@gmail.com", id: 4 },
        { name: "Alice", age: 27, email: "alice@gmail.com", id: 5 }]
    return (
        <div>
            <h1>Reuse Component in loop</h1>
            {arrObj.map((user) => {
                return (
                    <div key={user.id}>
                        <UserData user={user}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ReuseComponent