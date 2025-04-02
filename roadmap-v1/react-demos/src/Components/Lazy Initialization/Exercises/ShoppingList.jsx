import React, {useState} from 'react'

const ShoppingList = () => {

    const [items, setItems] = useState([]);
    const [productName, setProductName] = useState('');
    const [productQuantity, setProductQuantity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!productName || !productQuantity) return;

        // const newItem = {
        //     name, quantity: parseInt(productQuantity) // this will be made if we want to convert to integer
        // }

        const newItem = {
            productName, productQuantity
        };

        setItems((prevItems) => [...prevItems, newItem]);
        setProductName('');
        setProductQuantity('');


    }
    return (
        <div>
            <h1>Shopping List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Item Name" value={productName}
                       onChange={e => setProductName(e.currentTarget.value)}/>
                <input type="number" placeholder="Item Quantity" value={productQuantity}
                       onChange={e => setProductQuantity(e.currentTarget.value)}/>
                <button type="submit">Add Item</button>
            </form>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.productName} - Quantity - {item.productQuantity}</li>
                ))}
            </ul>

        </div>
    )
}
export default ShoppingList
