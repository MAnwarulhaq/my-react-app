import React from 'react'

const UseActionState = () => {
    const handleLogin = (preData,formData) => {
        let name= formData.get('name');
        let password = formData.get('password');
        console.log("Name: ", name);
        console.log("Password: ", password);
        const regex = /^[A-Z0-9]+$/i;
        if (!regex.test(password)) {
            return {console:"Password must contain at least one uppercase letter and one number"};
        }
        else if (name.length > 5) {
          return {console:"Name should not be more than 5 characters long"};
          }
        }


    }

    const [data,action,pending] = React.useActionState(handleLogin)
  return (
    <div>
        <h1>Use Action State Example</h1>
        <form action={action}>
        <input type="text" name="name" id="" />
        <br /><br />
        <input type="text" name="password" id="" />
        <br /><br />
        <button>Submit</button>
        </form>
    </div>
  )
}

export default UseActionState