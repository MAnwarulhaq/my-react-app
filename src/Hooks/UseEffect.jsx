import React from 'react'

const UseEffect = () => {
    const [count, setCount] = React.useState(0);
    const [data, setData] = React.useState(0);
    function callOnce(){
        console.log("This function is called only once");
    }
   // callOnce();

   // only call once after the first render
   React.useEffect(()=>{
        callOnce();
    },[])
   // only call on counter value change
    React.useEffect(()=>{
        callOnce();
    },[count])
  return (
    <div>
        <h1>useEffect</h1>
        <button onClick={()=>setCount(count+1)}>Count:{count}</button>

        <button onClick={()=>setData(data+1)}>Data:{data}</button>

    </div>
  )
}

export default UseEffect

// useEffect (()=>{}) - call every time the component renders
// useEffect (()=>{},[]) - runs only once after the first render
// useEffect (()=>{},[count]) - runs only when the count changes
// useEffect (()=>{},[data,count]) - call only when data and count both changes
// useEffect (()=>{return () => {},[props,props]) - call on change props