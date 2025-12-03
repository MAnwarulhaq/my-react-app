import React from 'react'

const UseMemo = () => {
  const [count, setCount] = React.useState(0)
  const [item, setItem] = React.useState(10)

  // function dono mbutton p call ho rha h es ko rokny k liye useMemo use krty h
  // heavy calulation k liye use hota h

  //     const multiCount = ()=>{
  //         console.log("MultiCount called")
  // return count*5
  //     }
  const multiCount = React.useMemo(() => {
    console.log("MultiCount called")
    return count * 5
  }, [count]) // jab count change hoga tabhi multiCount call hoga



  return (
    <div>

      <h1>useMemo</h1>
      <h2>Count: {count}</h2>
      <h2>Item: {item}</h2>
      <h1>{multiCount()}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setItem(item * 10)}>Item</button>
    </div>

  )
}

export default UseMemo