import type { NextPage } from 'next';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Slider from '../components/Slider';
import DealSection from '../components/DealSection';

const Home: NextPage = () => {
  return (
    <Layout>
      <Banner />
      <DealSection />
    </Layout>
  );
};

export default Home;
