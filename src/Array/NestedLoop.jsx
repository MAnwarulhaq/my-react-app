import React from 'react'
import College from './College'

const NestedLoop = () => {
    const collegesData = [
        {
            name: "College A",
            city: "City A",
            website: "www.collegea.com",
            students: [
                { name: "Alice", age: 20 ,email:"alice@gmail.com"},
                { name: "Bob", age: 22 ,email:"bob@gmail.com" }
            ]
        },
        {
            name: "College B",
            city: "City B",
            website: "www.collegeb.com",
            students: [
                { name: "Charlie", age: 21,email:"charlie@gmail.com" },
                { name: "David", age: 23,email:"david@gmail.com" }
            ]
        },
          {
            name: "College C",
            city: "City C",
            website: "www.collegeC.com",
            students: [
                { name: "Faizan", age: 19 ,email:"faizan@gmail.com"},
                { name: "Anwar", age: 24 ,email:"anwar@gmail.com"}
            ]
        },
          {
            name: "College D",
            city: "City D",
            website: "www.colleged.com",
            students: [
                { name: "Abrar", age: 18 ,email:"abrar@gmail.com"},
                { name: "Haseeb", age: 22,email:"haseeb@gmail.com" }
            ]
        },
        {
            name: "College E",
            city: "City E",
            website: "www.collegee.com",
            students: [
                { name: "Abuzar", age: 20,email:"abuzar@gmail.com" },
                { name: "Ali", age: 24 ,email:"ali@gmail.com" }
            ]
        }
    ]
  return (
    <div>
        <h1>Nested Loop in array</h1>
        {/* {
            collegesData.map((college, index) => (
                <div key={index} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                    <h2>{college.name}</h2>
                    <p>City: {college.city}</p>
                    <p>Website: {college.website}</p>
                    <h3>Students:</h3>
                    <ul>
                        {college.students.map((student, studentIndex) => (
                            <li key={studentIndex}>
                                {student.name} - Age: {student.age} - Email: {student.email}
                            </li>
                        ))}
                    </ul>
                </div>
            ))
        } */}

       
        {collegesData.map((college,index) => (
            <div key={index} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                
                <College college={college}/>

            </div>
        ))}

    </div>
  )
}

export default NestedLoop