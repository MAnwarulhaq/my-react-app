import React, { useState } from 'react'

// hooks start widt use

const useToggle = (defaultval) => {
 const [value,setValue]=useState(defaultval)
function toggleValue(val){
  if(typeof val!="boolean"){
    setValue(!value)
  }
  else{
    setValue(val)
  }
}
  return [value,toggleValue]

}

export default useToggle