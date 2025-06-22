import React from 'react'

const College = ({college}) => {
   
  return (
    <div>
        <h1>College Name: {college.name}</h1>
        <p>City: {college.city}</p>
        <p>Website: {college.website}</p>
        <h2>Students:</h2>
        <ul>
            {college.students.map((student, index) => (
            <li key={index}>
                Name: {student.name}, Age: {student.age}, Email: {student.email}
            </li>
            ))}
        </ul>
    </div>
  )
}

export default College