import React from 'react'

const reviewId = ({
    params
    }:{
    params:{
    productId: string;
    ReviewId:string;
}}) => {
  return (
    <div> Review {params.productId} for product {params.reviewId}</div>
  )
}

export default reviewId