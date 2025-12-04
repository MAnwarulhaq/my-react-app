import React, { useState,lazy,Suspense } from 'react'
// import Products from './Products'

const Products = lazy(()=> import('./Products'))

const LazyLoading = () => {
    const [open,setOpen] = useState(false)
  return (
    <div>
        <button onClick={()=>setOpen(!open)}>see products</button>
        <Suspense fallback={<h1>...loading</h1>}>
        {
            open &&  <Products/> 
        }
        </Suspense>
        
    </div>
  )
}

export default LazyLoading