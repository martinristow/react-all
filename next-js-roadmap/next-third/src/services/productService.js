export default async function getAllProducts(limit) {
    const response = await fetch('https://dummyjson.com/products?limit=' + limit, {
        next: {
            revalidate: 3600, // 1h -> 1hour
        }
    });
    return await response.json();
}


export async function getOneProductById(urlID) {
    const response = await fetch('https://dummyjson.com/products/' + urlID, {
        next: {
            cache: 'no-store'
        }
    });

    if (response.status === 404) {
        return (
            <>
                <h1>The product is not found!</h1>
            </>
        )
    }
    return await response.json();
}


