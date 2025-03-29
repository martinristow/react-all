'use client'

import React, {useState} from 'react'
import {addProduct} from "@/services/productService";

const ProductsRegister = () => {

    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState(0);

    const createProduct = () => {
       fetch('/api/register', {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify({
               title: productName,
               description: productDescription,
               price: productPrice,
           })
       })
    }



    return (
        <div>
            <h1>Add Product</h1>
            <form>
                <input type="text" placeholder="Product Name" onInput={e => setProductName(e.currentTarget.value)}/>
                <input type="text" placeholder="Product Description" onInput={e => setProductDescription(e.currentTarget.value)}/>
                <input type="number" placeholder="Product Price" onInput={e => setProductPrice(e.currentTarget.value)}/>
                <button type="button" onClick={createProduct}>Add Product</button>
            </form>
        </div>
    )
}
export default ProductsRegister
