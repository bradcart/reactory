// import App from 'next/app'
import { global } from "../stitches.config";
import { IdProvider } from "@radix-ui/react-id";
import "../globals.scss";

function MyApp({ Component, pageProps }) {
  const globalStyles = global({
    "@font-face": {
      fontFamily: "Newake",
      src: "local('Newake'), url('/fonts/Newake.woff2'), format('woff2')",
    },
    "@font-face": {
      fontFamily: "Pragmatica",
      src: "local('Pragmatica'), url('/fonts/Pragmatica.woff2'), format('woff2')",
    },
    "@font-face": {
      fontFamily: "FreeSans",
      src: "url('/fonts/FreeSans.woff2'), format('woff2')",
    },
    "@font-face": {
      fontFamily: "Nimbus Sans",
      src: "url('/fonts/NimbusSansLight.woff2'), format('woff2')",
    },
    "*": { margin: 0, padding: 0 },
    h1: { fontFamily: "Newake", color: "$white" },
  });

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
