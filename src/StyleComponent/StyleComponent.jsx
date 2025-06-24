import React from 'react'
import styled from 'styled-components';

// what is style component
// Style components is a library for React and React Native that allows you to use component-level styles
// how to install style component
// npm install styled-components
// import and Apply style component

const StyleComponent = () => {
  // const Heading = styled.h1`
  //   color: red;
  //   font-size: 30px;
  //   text-align: center;
  //   font-weight: bold;
  //   margin: 20px;
  //   padding: 10px;
  //   border: 2px solid black;
  //   border-radius: 10px;
  //   background-color: #f0f0f0;
  //   box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  //   transition: all 0.3s ease;
  //   &:hover {
  //     color: blue;
  //     background-color: #e0e0e0;
  //     transform: scale(1.01);
  //   }`
    const Heading=styled.h1({
       color: 'red',
      fontSize: '30px',
      textAlign: 'center',
      fontWeight: 'bold',
      margin: '20px',
      padding: '10px',
      border: '2px solid black',
      borderRadius: '10px',
      backgroundColor: '#f0f0f0',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      '&:hover': {
        color: 'blue',
        backgroundColor: '#e0e0e0',
        transform: 'scale(1.01)'
      }
    })
  return (
    <div>
        <h1>Style Component</h1>
        <Heading>Hi,Anwar</Heading>
    </div>
  )
}

export default StyleComponent