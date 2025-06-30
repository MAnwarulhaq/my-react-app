import React, { useState } from 'react'

const UpdatingArrayInState = () => {
    const [data,setData]=useState(["Anwar","Abrar","Haseeb","Zishan"])
    const [dataDetail,setDataDetail]=useState([
        {name:"Anwar",age:"23"},
        {name:"Faizan",age:"21"},
        {name:"Abrar",age:"20"},
        {name:"Farhan",age:"3"}

    ])

    const updateName=(val)=>{
        data[data.length-1]=val
        setData([...data])

    }
    const updateAge=(val)=>{
        dataDetail[dataDetail.length-1].age=val
        setDataDetail([...dataDetail])

    }
  return (
    <div>
        <h1>Array update in state</h1>
        <input type="text" onChange={(e)=>{updateName(e.target.value)}} />
        {
            data.map((item,index)=>{
                return <h3 key={index}>{item}</h3>
            })
        }
        <hr />
        <input type="text" onChange={(e)=>{updateAge(e.target.value)}} />
        {
            dataDetail.map((item,index)=>{
               return <h1 style={{color:"black"}} key={index}>Name: {item.name},Age: {item.age}</h1>
            })
        }
    </div>
  )
}

export default UpdatingArrayInState