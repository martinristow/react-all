import React from 'react'

const Product = ({name, price}) => {
    return (
        <div>
            <h1>Product</h1>
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
    )
}
export default Product
