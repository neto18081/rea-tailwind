import Footer from "../components/Footer";
import "../styles/globals.css";
import Head from "next/head";

import { ContextProvider } from "../utils/Context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ContextProvider>
        <div className="relative h-screen">
          <Component {...pageProps} />
        </div>
      </ContextProvider>
    </>
  );
}

export default MyApp;
