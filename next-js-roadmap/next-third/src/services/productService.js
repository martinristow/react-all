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


export async function searchProductByQuery(query) {
    const response = await fetch('https://dummyjson.com/products/search?q=' + query);
    return await response.json();
}


export function addProduct(productName, productDescription, productPrice) {
    fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: productName,
            description: productDescription,
            price: productPrice,
        })
    })
}

