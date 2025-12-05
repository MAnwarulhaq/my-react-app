import React, { useMemo, useState } from 'react'

const UseMemo = () => {
  const [count, setCount] = React.useState(0)
  const [item, setItem] = React.useState(10)
  const [total ,setTotal ] =useState()

  // function dono button p call ho rha h es ko rokny k liye useMemo use krty h
  // heavy calulation k liye use hota h

  // const  multiCount =() =>{
  //   console.log("MultiCount called")
  //   let total = 0
  //   for (let i = 0; i < 1000000000; i++) {
  //     total += i
  //   }
  //   return  total
  // }

  // const result = multiCount()
  const  multiCount =(count) =>{
    console.log("MultiCount called")
    let total = 0
    for (let i = 0; i < 1000000000; i++) {
      total += i
    }
    return  total + count
  }

  const result =useMemo(()=>  multiCount(count),[count])

  // setTotal(result)
  // const multiCount = React.useMemo(
  //   () => {
  //   console.log("MultiCount called")
  //   return count * 5
  // }, [count]) // jab count change hoga tabhi multiCount call hoga



  return (
    <div>

      <h1>useMemo</h1>
      <h2>total: {result}</h2>
      <h3>{count}</h3>
      <h2>Item: {item}</h2>
      {/* <h1>{multiCount()}</h1> */}
      {/* <h1>{multiCount}</h1> */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setItem(item * 10)}>Item</button>
    </div>

  )
}

export default UseMemo