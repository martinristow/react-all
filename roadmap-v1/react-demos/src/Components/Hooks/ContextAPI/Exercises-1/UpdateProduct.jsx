import {useContext, useState} from 'react'
import {ProductContext} from "./ProductContext.jsx";


export const UpdateProduct = () => {

    const {changeProductData} = useContext(ProductContext)
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')

    const handleSubmit = e => {
        e.preventDefault();

        if(productName.trim() && productPrice.trim()){
            const updateProduct = {
                name: productName,
                price: productPrice,
            }

            changeProductData(updateProduct)
            setProductName('');
            setProductPrice('');
        }



    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={productName} placeholder="Enter a new product name"
                       onInput={e => setProductName(e.currentTarget.value)}/>
                <input type="number" value={productPrice} placeholder="Enter a new product price"
                       onInput={e => setProductPrice(e.currentTarget.value)}/>
                <button>Click me</button>
            </form>
        </div>

    )
}