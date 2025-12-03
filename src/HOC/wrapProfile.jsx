import React from 'react'


const wrapProfile = (WrapComponent) => {
  return function Component( props){
    return(
        <>
            <WrapComponent {...props} />
        </>
    )
  }
}

export default wrapProfile