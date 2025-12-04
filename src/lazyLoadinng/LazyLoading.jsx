import React, { useState , lazy} from 'react'
// import Products from './Products'
const Products = lazy(()=> import ('./Products'))
const LazyLoading = () => {
    // const [open,setOpen] = useState
  return (
    <div>
        <Products/>
    </div>
  )
}

export default LazyLoading