import {cookies} from "next/headers"

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
};

export default async function ProductPage() {

    // const detailResponse = await fetch("http://localhost:3001/products/1", {
    //     cache: "no-cache",
    // })
    // const details = await detailResponse.json();

    const cookieStore = await cookies();
    const theme = cookieStore.get("theme");

    const response = await fetch("http://localhost:3001/products", {
        next:{
            revalidate: 10,
        }
    })
    const products = await response.json();

    return (
        <div>
            <h1>Product Page</h1>
            {products.map((product: Product) => (
                <div key={product.id} className="bg-gray-200 p-[3rem] m-[3rem]">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    )
}