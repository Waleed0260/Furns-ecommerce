import '../styles/globals.css'
import { AppContext, AppInitialProps } from "next/app";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}



MyApp.getInitialProps = async (appContext: AppContext) => {
  const data: AppInitialProps = await App.getInitialProps(appContext);

  const pageProps = {
    ...data.pageProps,
  };

  return pageProps;
};