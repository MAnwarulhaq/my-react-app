import React from 'react'
// Control Component
//In React, a controlled component is an input form element (like <input>, <textarea>, or <select>) whose value is controlled by React state.

const ControlComponent = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [submitdata, setSubmitData] = React.useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitData({ name, email, password })
        setEmail("");
        setName("");
        setPassword("")
        // You can handle form submission here
        console.log("Form submitted with:", { name, email, password });
    };

    return (
        <div>
            <h2>What is Control Component</h2>
            <form action="">
                <input type="text" value={name} placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
                <br /><br />
                <input type="email" value={email} placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                <br /><br />
                <input type="password" value={password} placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                <br /><br />
                <button onClick={handleSubmit}> Submit</button>
                <button onClick={() => { setEmail(""); setName(""); setPassword("") }}>Clear</button>

            </form>
            <h3>{submitdata.name}</h3>
            <h3>{submitdata.email}</h3>
            <h3>{submitdata.password}</h3>
        </div>
    )
}

export default ControlComponent