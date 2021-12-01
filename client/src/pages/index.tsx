import type { NextPage } from 'next';

import Layout from '../components/Layout';
import Nav from '../components/Nav';
import Banner from '../components/Banner';

const Home: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Banner />
    </Layout>
  );
};

export default Home;
