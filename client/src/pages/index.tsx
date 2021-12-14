import { useEffect } from 'react';
import { InferGetServerSidePropsType } from 'next';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import DealSection from '../components/DealSection';
import Advertisement from '../components/Advertisement';

import { useAppDispatch } from '../hooks/store';
import { fetchProducts } from '../store/product';
import { Product } from '../types';

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts(data));
  }, []);
  return (
    <Layout>
      <Banner />
      <DealSection products={data} />
      <Advertisement />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:8080/products');
  const data: Product[] = await res.json();
  return { props: { data } };
};

export default Home;
