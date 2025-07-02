import React, { useId } from 'react'

const UseID = () => {
    
    return (
        <div>
            <UniqueID />
            <hr />
             <UniqueID />
        </div>
    )
}
function UniqueID() {
    //use differet id
// const name = useId()
// const password=useId()
// const skill=useId()
// const terms=useId()

//
    return (
        <div style={{margin:"20px"}}>
            <label htmlFor={name}>Enter Your Name</label>
            <input type="text" name="name" id={name} />
            <br /><br />
             <label htmlFor={password}>Enter Your password</label>
            <input type="text" name="name" id={password} />
            <br /><br />
             <label htmlFor={skill}>Enter Your Skill</label>
            <input type="text" name="name" id={skill} />
            <br /><br />
             <label htmlFor={terms}>Checkbox</label>
            <input type="checkbox" name="name" id={terms} />

        </div>
    )

}
export default UseID