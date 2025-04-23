import React from 'react'
import {notFound} from "next/navigation";

const generateRandomNumber = (count: number) => {
    return Math.floor(Math.random() * count);
}

const ReviewDetail = async ({params,}: {
    params: Promise<{
        reviewsId: string;
        productId: string;
    }>
}) => {

    const {productId, reviewsId} = await params;

    const random = generateRandomNumber(2);
    if(random === 1) throw new Error("Error loading review")

    if(parseInt(reviewsId) > 1000){
        notFound();
    }

    return (
        <div>
            <h1>Review {reviewsId} for product {productId}</h1>
        </div>
    )
}
export default ReviewDetail
