import React from 'react'

const UseActionState = () => {
    const handleLogin = () => {
        
    }

    const [] = React.useActionState(handleLogin)
  return (
    <div>
        <h1>Use Action State Example</h1>
        <input type="text" name="" id="" />
        <br /><br />
        <input type="text" name="" id="" />
        <br /><br />
        <button>Submit</button>
    </div>
  )
}

export default UseActionState