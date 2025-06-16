// how to pass jsx as  props in react
import React from 'react'

const Wraper = ({children}) => {
  return (
    <div style={{ border: "2px solid red", padding: "20px", margin: "20px" }}>
        {children}
    </div>
  )
}

export default Wraper