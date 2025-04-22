import React from 'react'
import {notFound} from "next/navigation";

const ReviewDetail = async ({params,}: {
    params: Promise<{
        reviewsId: string;
        productId: string;
    }>
}) => {

    const {productId, reviewsId} = await params;


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
