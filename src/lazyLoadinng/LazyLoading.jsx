import React, { useState } from 'react'
import Products from './Products'

const LazyLoading = () => {
    const [open,setOpen] = useState(false)
  return (
    <div>
        <button onClick={()=>setOpen(!open)}>see products</button>
        {
            open &&  <Products/> 
        }
        
    </div>
  )
}

export default LazyLoading