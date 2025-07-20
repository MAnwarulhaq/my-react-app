import React from 'react'

const LoginValidation = () => {
    const [userName, setUserName] = React.useState("");
    const [nameError, setNameError] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleEvwent = (e) => {
        console.log(e.target.value);
        if (e.target.value.length > 5) {
            setNameError("Username must be at least 5 characters long");
        } else {
            setNameError("");
        }
    }
  return (
    <div>
        <h1>Login </h1>
        <input type="text" name="" id="" onChange={handleEvwent}/>{nameError && <span style={{color: "red"}}>{nameError}</span>}
        <br /><br />
        <input type="password" name="" id="" />
        <br /><br />
        <button>Login</button>
    </div>
  )
}

export default LoginValidation