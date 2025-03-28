import Image from "next/image";
import './globals.css';

export default async function Home() {

    const response = await fetch('https://dummyjson.com/products?limit=9');
    const data = await response.json();

    return (
        <>
            Products
            <div className="productWrapper">
                {
                    data.products.map((product) => (
                        <div className="product" key={product.id}>
                            <Image key={product.id} src={product.thumbnail} alt="asd" width="200" height="200"/>
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <p className="product-price">{product.price}</p>

                            <br/>
                        </div>
                    ))
                }
            </div>
        </>
    );
};
