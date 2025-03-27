export default function BlogSlug({params}) {

    const blogPosts = [
        {
            name: "First blog",
            description: "Lorem ipsum...",
            slug: "first-blog",
        },
        {
            name: "Second blog",
            description: "Lorem ipsum...",
            slug: "second-blog",
        }
    ];

    const blog = blogPosts.find(post => params.slug === post.slug);

    if (typeof blog === "undefined") {
        return (
            <>
                <h1>404 THIS ARTICLE IS NOT FOUND</h1>
            </>
        )
    }

    return (
        <>
            <h1>{blog.name}</h1>
            <p>{blog.description}</p>
        </>
    )
}