import React from 'react'

const ProductsID = async ({params}: { params: Promise<{ productId: string }> }) => {
    const {productId} = await params
    return (
        <div>Details about product {productId}</div>
    )
}
export default ProductsID
