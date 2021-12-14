import { InferGetServerSidePropsType, GetServerSideProps } from 'next';

import { Product } from '../../types';

const ProductDetails = ({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <div>Hello Product</div>;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(`http://localhost:8080/products/${params!.id}`);
  const product: Product = await res.json();
  return {
    props: {
      product,
    },
  };
};

export default ProductDetails;
