import React from "react";

const ProductDetails = ({ 
    params
  }: { 
    params: { productId: String } 
   
  }) => {
  return <div>Details of Prod {params.productId}</div>;
};

export default ProductDetails;
