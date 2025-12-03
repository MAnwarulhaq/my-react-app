import React from 'react'
import { Link } from 'react-router'

const About = () => {
  return (
    <div>
        <h1>About</h1>
        <Link to="/">Go to Home</Link>
        <br />
        <Link to="/contact">Go to Contact</Link>
    </div>
  )
}

export default About