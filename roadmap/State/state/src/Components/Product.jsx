import React, {useState} from 'react'

const Product = (props) => {

    let [products, setProducts] = useState({
        "Samsung A55": 31000,
        "Samsung A70": 24000,
        "Iphone 15 Pro": 65000,
        "Samsung Galaxy 21": 55000
    });

    /*
    * 1. Input for product name -> newProductName, setNewProductName
    * 2. Input for product price -> newProductPrice, setNewProductPrice
    * 3. Create Button
    *       -> onClick: addProducts
    *       -> newProductName, newProductPrice
    *       -> push products
    */
    let [newProductName, setNewProductName] = useState("");
    let [newProductPrice, setNewProductPrice] = useState("");
    let [infoMessage, setInfoMessage] = useState();

    function searchP(e) {
        const searchTerm = e.currentTarget.value.toLowerCase();
        // if(products.hasOwnProperty(searchTerm)){ // search = "Iphone 15 Pro" -> hasOwnProperty -> "products" -> key "Iphone 15 Pro"
        //     console.log("true")
        // } else{
        //     console.log("false");
        // }
        let productNames = Object.keys(products);
        for (let product of productNames) {
            if (searchTerm === product.toLowerCase()) {
                setInfoMessage("Successfully found the product")
                break;
            } else{
                setInfoMessage("We didn't find the product.");
            }
        }

    }

    function addProduct() {
        if (newProductPrice === "" || newProductName === "") {
            console.log("Enter a product name or product price!")
            return;
        }


        let newProduct = {[newProductName]: parseInt(newProductPrice)};

        /*
        * oldProducts (currentProducts)
        * currentProducts
        * => arrow function
        * ({}) -> entering a new values
        * */

        setProducts(currentProducts => ({
            ...currentProducts, // merge current products
            ...newProduct // merge new products
        }))
    }

    return (
        <div>

            <div>
                {
                    Object.entries(products).map(([phone, price]) => (

                        <div>
                            <h3>{phone}</h3>
                            <p>{calculateTax(price, props.tax)}</p>
                        </div>

                    ))
                }
            </div>

            <div>
                <input onInput={(e) => setNewProductName(e.target.value)} type="text"
                       placeholder="Enter a product name"/>
                <input onInput={(e) => setNewProductPrice(e.target.value)} type="number"
                       placeholder="Enter a product price"/>
                <button onClick={addProduct}>Add new Product</button>
            </div>


            <div>
                <h1>{infoMessage}</h1>
                <input type="text" placeholder="Enter a product name for searching" onInput={searchP}/>
            </div>
        </div>
    )
}


function calculateTax(price, tax) {
    return ((price * tax) / 100) + price
}


export default Product