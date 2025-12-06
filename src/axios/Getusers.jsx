import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Getusers = () => {
    const [users,setUsers] = useState([])


    useEffect(()=>{
            axios.get("http://localhost:3000/users")
            .then(res=> setUsers(res?.data))
            .catch(error => console.log(error))
    },[])

    // console.log(users)
  return (
    <div>
        <h3>Users Name</h3>
        {users.map((user)=>{
            return(
                <h3 key={user.id}>{user.name}</h3>
            )
        })}
    </div>
  )
}

export default Getusers