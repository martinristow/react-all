"use client"
import {useRouter} from "next/navigation";
const OrderProduct = () => {
    const router = useRouter();

    const handleClick = () => {

        console.log("Placing your order")
        router.push("/")
    }

    return (
        <div>
            <h1>Order product</h1>
            <button
                className='bg-gray-700 m-2 p-2 cursor-pointer'
                onClick={handleClick}
            >
                Place order
            </button>
        </div>
    )
}
export default OrderProduct
