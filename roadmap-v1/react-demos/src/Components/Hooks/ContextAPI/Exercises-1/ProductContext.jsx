import {createContext, useState} from 'react'

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {

    const [product, setProduct] = useState({name: "Apple", price: "15"})

    const changeProductData = (newProductData) => {
        setProduct(newProductData)
    }

    return <ProductContext.Provider value={{product, changeProductData}}>
        {children}
    </ProductContext.Provider>

}