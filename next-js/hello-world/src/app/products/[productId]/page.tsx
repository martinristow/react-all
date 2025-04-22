import {Metadata} from "next";

type Props = {
    params: {
        productId: string;
    }
}

// export const generateMetadata =  async ({params}: Props): Promise<Metadata> => {
//
//     const title = await new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`Iphone ${title}`);
//         }, 100);
//     });
//
//     return {
//         title: `Product ${params.productId}`
//     }
// }


const ProductsID = async ({params}: Props) => {
    const {productId} = await params
    return (
        <div>Details about product {productId}</div>
    )
}
export default ProductsID
