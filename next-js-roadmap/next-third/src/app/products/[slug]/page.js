import Image from "next/image";
import Link from "next/link";
import {getOneProductById} from "@/services/productService";

export default async function ProductsSlug({params}) {

    const urlID = parseInt(params.slug)
    if (Number.isNaN(urlID)) {
        return (
            <>
                <h1>Please enter a number!</h1>
            </>
        )
    }

    const data = await getOneProductById(urlID);

    return (

        <div>
            <Link href="/">
                <button className="button-back">Back</button>
            </Link>
            <div className="products">
                <h1 className="product-title">{data.title}</h1>
                <Image src={data.thumbnail} alt={data.title} width={300} height={300}/>
                <p className="product-description">{data.description}</p>
                <p className="product-price">{data.price}</p>
            </div>
        </div>
    )
}