'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";


const navLinks = [
    {name: "Home", href: "/"},
    {name: "Blog", href: "/blog"},
    {name: "Products", href: "/products"}
]

const Home = () => {

    const pathname = usePathname();

    return (
        <div>
            <h1>Hello</h1>
            {
                navLinks.map((link, index) => {
                    const isActive = pathname.startsWith(link.href);
                    return (
                        <Link
                            href={link.href}
                            key={index}
                            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
                        >
                            {link.name}
                        </Link>
                    )
                })
            }


            {/*<Link href="/blog">Blog</Link>*/}
            {/*<Link href="/products">Products</Link>*/}
        </div>
    )
}


export default Home