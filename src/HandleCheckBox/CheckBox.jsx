// Make a Checkbox
// Define the state for the checkbox
// Get the value of the checkbox in state
// Remove the value of the checkbox from state

import React from 'react'

const CheckBox = () => {
  const [skill,setSkill]= React.useState([])
  const handleSkill = (e) => {
    console.log(e.target.value, e.target.checked);
    if(e.target.checked){
    setSkill([...skill, e.target.value])
  }
   else {
    setSkill([skill.filter((s) => s !== e.target.value)])
  }}
  return (
    <div>
        <h1>Handle the CheckBox in react</h1>
        <h3>Select your Skills</h3>
        <input onChange={handleSkill} type="checkbox" name="" id="php" value="php"/>
        <label htmlFor="php">Php</label>
        <br /><br />
        <input onChange={handleSkill} type="checkbox" name="" id="php" value="Js" />
        <label htmlFor="Js">Js</label>
          <br /><br />
        <input onChange={handleSkill} type="checkbox" name="" id="node" value="node" />
        <label htmlFor="node">Node</label>
          <br /><br />
        <input onChange={handleSkill} type="checkbox" name="" id="java" value="java"/>
        <label htmlFor="java">Java</label>
        <h1>{skill.toString()}</h1>
    </div>
  )
}

export default CheckBox