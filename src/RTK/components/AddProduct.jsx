import React, { useState } from 'react'

const AddProduct = () => {
    const [product, setProduct] = useState()

    function handleSubmit() {
        alert('sumbit SuccessFull')
    }
    return (
        <div>
            <h1>Add Products</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nmae">Product Name</label>
                    <br />
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="nmae">Product Name</label>
                    <br />
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="nmae">Price</label>
                    <br />
                    <input type="number" name="price" id="price" />
                </div>
                <br />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default AddProduct