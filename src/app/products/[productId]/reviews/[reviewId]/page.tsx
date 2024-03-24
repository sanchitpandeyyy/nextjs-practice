import React from 'react'
import { notFound } from 'next/navigation'

const reviewId = ({
    params
    }:{
    params:{
    productId: string;
    reviewId:string;
}}) => {
  if (parseInt(params.reviewId)>1000){
    notFound();
  }
  return (
    <div> Review {params.productId} for product {params.reviewId}</div>
  )
}

export default reviewId