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
//     use differet id
// const name = useId()
// const password=useId()
// const skill=useId()
// const terms=useId()

// single id for all
 const user=useId()
    return (
        //   <div style={{margin:"20px"}}>
        //     <label htmlFor={name}>Enter Your Name</label>
        //     <input type="text" name="name" id={name} />
        //     <br /><br />
        //      <label htmlFor={password}>Enter Your password</label>
        //     <input type="text" name="name" id={password} />
        //     <br /><br />
        //      <label htmlFor={skill}>Enter Your Skill</label>
        //     <input type="text" name="name" id={skill} />
        //     <br /><br />
        //      <label htmlFor={terms}>Checkbox</label>
        //     <input type="checkbox" name="name" id={terms} />

        // </div>
        <div style={{margin:"20px"}}>
            <label htmlFor={user+"name"}>Enter Your Name</label>
            <input type="text" name="name" id={user+"name"} />
            <br /><br />
             <label htmlFor={user+"password"}>Enter Your password</label>
            <input type="text" name="name" id={user+"password"} />
            <br /><br />
             <label htmlFor={user+"skill"}>Enter Your Skill</label>
            <input type="text" name="name" id={user+"skill"} />
            <br /><br />
             <label htmlFor={user+"terms"}>Checkbox</label>
            <input type="checkbox" name="name" id={user+"terms"} />

        </div>
    )

}
export default UseID