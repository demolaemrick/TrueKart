import type { NextPage } from 'next';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import DealSection from '../components/DealSection';
import Advertisement from '../components/Advertisement';

const Home: NextPage = () => {
  return (
    <Layout>
      <Banner />
      <DealSection />
      <Advertisement />
    </Layout>
  );
};

export default Home;
