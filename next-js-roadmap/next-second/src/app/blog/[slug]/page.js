export default async function BlogSlug({params}) {

    const number = parseInt(params.slug);
    if (Number.isNaN(number)) {
        return <>
        <h1>BAD VALUE! Please enter a number...</h1>
        </>
    }
    const apiURL = 'https://dummyjson.com/products/' + number;

    const response = await fetch(apiURL);
    const data = await response.json();

    return (
        <>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p>{data.category}</p>
            <p>{data.price}</p>
        </>
    )
}