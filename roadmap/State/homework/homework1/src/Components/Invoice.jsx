import React, {useState} from 'react'

const Invoice = () => {

    let [companyName, setCompanyName] = useState("");
    let [articles, setArticles] = useState([]);
    let [productPrice, setProductPrice] = useState(0);
    let [purchasedFrom, setPurchasedFrom] = useState("");
    let [productName, setProductName] = useState("");
    let [quantity, setQuantity] = useState(0);

    function addProduct() {

        if (productName === "" || quantity === "" || productPrice === "") {
            return;
        }


        const newArticle = [{
            name: productName,
            quantity: parseInt(quantity),
            productPrice: parseInt(productPrice),
        }];
        setArticles(currentArticle => [...currentArticle, ...newArticle])
    }


    function createInvoice() {
        console.log("test")
    }

    return (
        <>
            <div>
                <h1>Add Products</h1>
                <input type="text" placeholder="Product Name" onInput={(e) => setProductName(e.target.value)}/>
                <input type="number" placeholder="Quantity" onInput={(e) => setQuantity(e.target.value)}/>
                <input type="text" placeholder="Product Price" onInput={(e) => setProductPrice(e.target.value)}/>
                <button onClick={addProduct}>Add Product</button>
                <div>

                    {
                        totalAmountPerProducts(articles)
                    }
                </div>
                <hr/>
                <h1>Create Invoice</h1>
                <input type="text" placeholder="Enter a Company Name" onInput={(e) => setCompanyName(e.target.value)}/>
                <input type="text" placeholder="Purchased From" onInput={(e) => setPurchasedFrom(e.target.value)}/>
                <button onClick={createInvoice}>Create Invoice</button>
            </div>


        </>
    )
}
export default Invoice


function totalAmountPerProducts(articles) {
    return articles.map((article, index) => (
        <p key={index}>Article: {article.name}, Quantity: {article.quantity}, Price: {article.quantity * article.productPrice}</p>
    ))
}

function totalAmount(articles) {

}