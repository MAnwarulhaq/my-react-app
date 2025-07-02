import React, { useActionState } from 'react'

const UseActionState = () => {
    const handlesubmit = async (previousData, formData) => {
        let name = formData.get("name")
        let password = formData.get("password")
        await new Promise(res => setTimeout(res, 3000))
        console.log("Submited!", name, password)
        if (name && password) {
            return { message: "Data Submited",name,password }
        }
        else {
            return { error: "Fill the data",name,password }
        }


    }
    const [data, action, pending] = useActionState(handlesubmit, undefined)
    console.log(data)


    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <h1>UseActionState inn React </h1>
            <form action={action}>
                <input type="text" placeholder='Enter your Name' name='name' />
                <br /><br />
                <input type="password" name="password" id="" placeholder='Enter Your Password' />
                <br /><br />
                <button disabled={pending}>Submit</button>

            </form>
            {data?.message && <p style={{ color: "green" }}>{data.message}</p>}
            {data?.error && <p style={{ color: "red" }}>{data.error}</p>}
            <h3>Name:{data?.name}</h3>
            <h3>Password:{data?.password}</h3>
        </div>
    )
}

export default UseActionState