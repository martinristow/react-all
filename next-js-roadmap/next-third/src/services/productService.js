export default async function getAllProducts(limit) {
    const response = await fetch('https://dummyjson.com/products?limit=' + limit);
    return await response.json();
}


export async function getOneProductById(urlID) {
    const response = await fetch('https://dummyjson.com/products/' + urlID);

    if (response.status === 404) {
        return (
            <>
                <h1>The product is not found!</h1>
            </>
        )
    }
    return await response.json();
}