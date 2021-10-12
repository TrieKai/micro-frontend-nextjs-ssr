import "../styles/globals.css";
import type { AppProps } from "next/app";

import CountContextProvider from "../context/Context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CountContextProvider>
      <Component {...pageProps} />
    </CountContextProvider>
  );
}
export default MyApp;
