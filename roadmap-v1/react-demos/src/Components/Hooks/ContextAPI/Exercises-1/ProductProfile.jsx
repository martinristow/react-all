import {useContext} from "react";
import {ProductContext} from "./ProductContext.jsx";

const ProductProfile = () => {

    const {product} = useContext(ProductContext)
    return (
        <div>
            <h1>Product Profile</h1>
            <p>Product Name: {product.name}, price: ${product.price}.</p>
        </div>
    )
}
export default ProductProfile
