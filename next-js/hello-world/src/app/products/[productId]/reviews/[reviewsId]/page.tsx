import React from 'react'

const ReviewDetail = async ({params,}: {
    params: Promise<{
        reviewsId: string;
        productId: string;
    }>
}) => {

    const {productId, reviewsId} = await params;
    console.log(reviewsId, productId);
    return (
        <div>
            <h1>Review {reviewsId} for product {productId}</h1>
        </div>
    )
}
export default ReviewDetail
