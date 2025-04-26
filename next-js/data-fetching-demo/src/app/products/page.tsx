interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
};

export default async function ProductPage() {

    const response = await fetch("http://localhost:3001/products")
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