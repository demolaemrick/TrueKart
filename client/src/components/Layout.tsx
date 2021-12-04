import { FC } from 'react';
import Head from 'next/head';
import Header from './Header';
import Nav from './Nav';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>TrueKart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <main style={{ padding: '0 8px' }}>{children}</main>
    </div>
  );
};

export default Layout;
