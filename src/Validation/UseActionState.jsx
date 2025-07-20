import React from 'react'

const UseActionState = () => {
    const handleLogin = (preData,formData) => {
        let name= formData.get('name');
        let password = formData.get('password');
        // console.log("Name: ", name);
        // console.log("Password: ", password);
        const regex = /^[A-Z0-9]+$/i;
        if (!name || name.length > 6){
           return {error:"Name should be not empty and should not be more than 6 characters long",name,password};
        }
        else if  (!regex.test(password)) {
          
           return {error:"Password must contain at least one uppercase letter and one number" ,name,password};
          }
        else{
            return {message:"Login successful",name,password} 
        }


        
    }
  

    const [data,action,pending] = React.useActionState(handleLogin)
    //   console.log(data)
  return (
    <div>
        <h1>Use Action State Example</h1>
        {
            data?.message && <span style={{color: "green"}}>{data.message}</span>
        }
         {
            data?.error && <span style={{color: "red"}}>{data.error}</span> 
}
        <form action={action}>
        <input type="text" name="name" id="" defaultValue={data?.name}/>
        <br /><br />
        <input type="text" name="password" id="" defaultValue={data?.password}/>
        <br /><br />
        <button>Submit</button>
        </form>
    </div>
  )
}

export default UseActionState