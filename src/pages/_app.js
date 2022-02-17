import '../styles/globals.css';
import { AppContext } from '@context/AppContext';
import { useInitialState } from '@hooks/useInitialState';
import { Header } from '@components/Header';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <Head>
        <title>NextShop</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
