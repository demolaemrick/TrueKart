import type { InferGetServerSidePropsType } from 'next';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import DealSection from '../components/DealSection';
import Advertisement from '../components/Advertisement';

import { Product } from '../types';

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data);
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
