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


export default async function ProductDetails({params}: { params: Promise<{ productId: string }> }) {
    const {productId} = await params;

    return (
        <div>Details about product {productId}</div>
    );
}