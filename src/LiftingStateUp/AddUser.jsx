

// function AddUser(){
//     // const [user,setUser]=useState("")

//     return(
//         <div>
//             {/* <h1>Add User{user}</h1> */}
//             <h1>Add User</h1>
//             <input type="text" name="" id="" placeholder="Enter you name" onChange={(e)=>setUser(e.target.value)}/>
            
//             <hr />
//         </div>
//     )
// }


function AddUser({setUser}){
    // const [user,setUser]=useState("")

    return(
        <div>
            {/* <h1>Add User{user}</h1> */}
            <h1>Add User</h1>
            <input type="text" name="" id="" placeholder="Enter you name" onChange={(e)=>setUser(e.target.value)}/>
            
            <hr />
        </div>
    )
}

export default AddUser