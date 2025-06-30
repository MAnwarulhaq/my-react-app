import React, { useState } from 'react'

const UpdateObjectOnState = () => {
    const [data,setData]=useState({
        name:"Anwar",
        address:{
            city:"Karachi",
            country:"Pakistan"
        }
    })
    const handleData=(val)=>{
        data.name=val
        setData({...data})
        
    }
    const handleCity=(city)=>{
        data.address.city=city
        // setData({...data})
        setData({...data,address:{...data.address,city}})
    }
  return (
    <div>
        <h1>Update Object on Statee</h1>
        <input type="text" placeholder='Enter your name' onChange={(e)=>handleData(e.target.value)}/>
        <input type="text" placeholder='Enter your name' onChange={(e)=>handleCity(e.target.value)}/>
        {/* <button onClick={handleData}>Update data</button> */}
        <hr />
        <h1>Name:{data.name}</h1>
        <h3>City:{data.address.city}</h3>
        <h3>Country:{data.address.country}</h3>
    </div>
  )
}

export default UpdateObjectOnState