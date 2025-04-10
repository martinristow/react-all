import {useEffect, useState} from "react";

interface ProductInterface {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    image: string[];
}

const MyComponent = () => {

    const [data, setData] = useState<ProductInterface | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products/1')
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data ", error)
            }
        }
        fetchData();
    }, [])


    return (
        <div>
            <h1>My Component</h1>
            {data ? (<div>
                <p>ID: {data.id}</p>
                <p>Title: {data.title}</p>
                <p>Description: {data.description}</p>
                <p>Price: {data.price}</p>
                <p>DiscountPercentage: {data.discountPercentage}</p>
                <p>Rating: {data.rating}</p>
                <p>Stock: {data.stock}</p>
                <p>Brand: {data.brand}</p>
                <p>Category: {data.category}</p>
                <p>Thumbnail: {data.thumbnail}</p>

            </div>) : (<p>Loading...</p>)}
        </div>
    )
}
export default MyComponent
