// how to pass jsx as  props in react
import React from 'react'
// defult props in react
// how to pass jsx as  props in react
// change the style of a component using props

const Wraper = ({children,color}) => {
  return (
    <div style={{ border: "2px solid red", padding: "20px", margin: "20px", color:color }}>
        {children}
    </div>
  )
}

export default Wraper