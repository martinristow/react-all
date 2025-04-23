import Link from "next/link";

export const Home = () => {
    return (
        <div>
            <h1>Hello</h1>
            <Link href="/blog">Blog</Link>
            <Link href="/products">Products</Link>
        </div>
    )
}


export default Home