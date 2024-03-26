import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise(resolve=>{
    setTimeout(()=>{
      resolve(`Iphone ${params.productId}`)
    },4000)
  })
  return {
    title: `Product ${title}`,
  };
};

const ProductDetails = ({ params }: { params: { productId: String } }) => {
  return <div>Details of Prod {params.productId}</div>;
};

export default ProductDetails;
