import React from 'react'

const MultipleCon = () => {
  const [Condition, setCondition] = React.useState(0);
  return (
    <div>
      <h1>Multiple Condition </h1>
      <h3>Count ={Condition}</h3>
      <br />
      <button onClick={()=>setCondition(Condition+1)}>Counte</button>
      {Condition ===0? <h2>Condition is 0</h2>
      :Condition===1?<h1>Condition1</h1>
      :Condition===2?<h2>Condition2</h2>
      :Condition===3?<h3>Condition3</h3>
      :Condition===4?<h4>Condition4</h4>
      :null}

    </div>
  )
}

export default MultipleCon