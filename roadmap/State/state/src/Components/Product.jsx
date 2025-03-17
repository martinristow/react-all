import React from 'react'

const products = {
    "Samsung A55": 31000,
    "Samsung A70": 24000,
    "Iphone 15 Pro": 65000,
    "Samsung Galaxy 21": 55000
};

const Product = (props) => {
    return (
        <div>

            {
                Object.entries(products).map(([phone, price]) => (
                    <p>{phone}, price: {price} MKD, with tax: {calculateTax(price, props.tax)}</p>
                ))

            }

        </div>
    )
}


function calculateTax(price, tax) {
    return ((price * tax) / 100) + price
}

export default Product