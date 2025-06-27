import React from 'react'
import UserChildComponent from './UserChildComponent'

const UserParentComponent = () => {
    //  const handleClick = () => {
    //     alert('Button clicked');
    // }
     const handleClick = (name) => {
        alert(name);
    }
    return (
        <div>
            {/* <UserChildComponent displayName={handleClick}/> */}
            <UserChildComponent  displayName={handleClick} name="Anwar"/>
            <UserChildComponent  displayName={handleClick} name="Abrar"/>
            <UserChildComponent  displayName={handleClick} name="Faizan"/>
            <UserChildComponent  displayName={handleClick} name="Haseeb"/>
            <UserChildComponent  displayName={handleClick} name="Umar"/>

           
        </div>
    )
}

export default UserParentComponent