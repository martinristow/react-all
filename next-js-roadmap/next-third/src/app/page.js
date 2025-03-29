import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import getAllProducts from "@/services/productService";


export default async function Home() {

    const data = await getAllProducts(9);

    return (
        <div>

            <h1 style={{textAlign: "center", margin: "20px 0", color: "#333"}}>Our Products</h1>

            <div className="products-container">
                {data.products.map(product => (
                    <div key={product.id} className="product-card">
                        <Image
                            src={product.thumbnail}
                            alt={product.title}
                            width={200}
                            height={200}
                            className="product-image"
                            priority={true}
                        />
                        <div className="product-info">
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <Link href={`/products/${product.id}`}>
                                <button type="button">See more</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
