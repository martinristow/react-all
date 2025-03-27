import Image from "next/image";
import F1_Image from "../../../public/images/f1-image.jpg"
console.log(F1_Image)
export default async function About() {

    const response = await fetch("https://dummyjson.com/posts?limit=1");
    const data = await response.json();
    const post = data["posts"][0];

    return (
        <>
            <p>About Page</p>

            <h1>{post.title}</h1>
            <p>{post.body}</p>

            <Image src={F1_Image}
                   alt="Formula 1 Image"
                   width="500"
                   height="500"
            />
        </>
    )
}