import Image from "next/image";
import F1_Image from "../../../public/images/f1-image.jpg"
console.log(F1_Image)
export default function About(){
    return (
        <>
            <p>About Page</p>

            <Image src={F1_Image}
                   alt="Formula 1 Image"
                   width="500"
                   height="500"
            />
        </>
    )
}