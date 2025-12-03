import React from 'react'


const wrapProfile = (WrapComponent) => {
  return function Component( props){
    return(
        <div>
            <WrapComponent {...props} />
        </div>
    )
  }
}

export default wrapProfile