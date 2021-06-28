// import App from 'next/app'
import { install } from "resize-observer";
import { IdProvider } from "@radix-ui/react-id";
// import { reset } from "stitches-reset";
import { global } from "../stitches.config";
import "../styles.scss";

// const globalStyles = global(reset);
const globalStyles = global({
  body: {
    backgroundColor: "$black100",
  },
});

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    install();
  }
  globalStyles();
  return (
    <IdProvider>
      <Component {...pageProps} />
    </IdProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
