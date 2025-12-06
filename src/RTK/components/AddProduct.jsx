import React, { useState } from 'react'
import { useAddProductMutation } from '../service/products'

const AddProduct = () => {
    const [product, setProduct] = useState()
    const [addProducts] = useAddProductMutation()


    function handleChange(e) {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (product) {

            addProducts(product)

            alert("Submit Successful");
            // console.log(product);
        }

    }
    return (
        <div>
            <h1>Add Products</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nmae">Product Name</label>
                    <br />
                    <input type="text" name="name" id="name" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="brandnmae">Brand Name</label>
                    <br />
                    <input type="text" name="brandname" id="brandname" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <br />
                    <input type="number" name="price" id="price" onChange={handleChange} />
                </div>
                <br />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default AddProduct