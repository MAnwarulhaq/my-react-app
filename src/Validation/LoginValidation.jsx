import React from 'react'

const LoginValidation = () => {
    const [userName, setUserName] = React.useState("");
    const [nameError, setNameError] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");

    const handleName = (e) => {
        console.log(e.target.value);
        if (e.target.value.length > 5) {
            setNameError("Username must be at least 5 characters long");
        } else {
            setNameError("");
        }
    }
     const handPassword = (e) => {
        console.log(e.target.value);
        if (e.target.value.length > 5) {
            setPasswordError("Username must be at least 5 characters long");
        } else {
            setPassword("");
        }
    }
  return (
    <div>
        <h1>Login </h1>
        <input type="text" name="" id="" onChange={handleName}/>{nameError && <span style={{color: "red"}}>{nameError}</span>}
        <br /><br />
        <input type="password" name="" id="" onChange={handPassword}/>
        <br /><br />
        <button disabled={nameError}>Login</button>
    </div>
  )
}

export default LoginValidation