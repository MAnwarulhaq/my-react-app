import React from 'react'
import { useFormStatus } from 'react-dom'

const UseformStatus = () => {
    const handleSubmit = async () => {
        await new Promise(res => setTimeout(res, 5000))
        console.log("Submit")

    }

    function CustomerForm() {
        const {pending}=useFormStatus()
        return (
            <div>
                <input type="text" name="" id="" />
                <br /> <br />
                <input type="text" name="" id="" />
                <br /><br />
                {/* <button disabled={pending}>Submit</button> */}
                <button disabled={pending}>{pending?"Submiting...":"Submit"}</button>
            </div>
        )
    }


    return (
        <div>
            <h1>UseFormStataus</h1>
            <form action={handleSubmit}>
                <CustomerForm/>

            </form>
        </div>
    )
}

export default UseformStatus