// import App from 'next/app'
import { install } from "resize-observer";
import { IdProvider } from "@radix-ui/react-id";
import { global } from "../stitches.config";

// const globalStyles = global(reset);

const globalStyles = global({
  // Fonts
  "@font-face": [
    {
      fontFamily: "HKI Nightlife",
      src: 'url(/fonts/hkinight.woff2) format("woff2"), url(/fonts/hkinight.woff) format("woff")',
    },
    {
      fontFamily: "GT America Expanded",
      src: 'url(/fonts/gt-america-expanded-bold.woff2) format("woff2"), url(/fonts/gt-america-expanded-bold.woff) format("woff")',
    },
    {
      fontFamily: "GRIFTER",
      src: 'url(/fonts/grifter-bold.woff2) format("woff2"), url(/fonts/grifter-bold.woff) format("woff")',
    },
    {
      fontFamily: "D-DIN Exp",
      src: 'url(/fonts/d-dinexp.woff2) format("woff2"), url(/fonts/d-dinexp.woff) format("woff")',
    },
    {
      fontFamily: "Poppins",
      src: 'url(/fonts/poppins-regular.woff2) format("woff2"), url(/fonts/poppins-regular.woff) format("woff")',
    },
  ],

  // HTML Elements
  "*": {
    boxSizing: "border-box",
    "&::before": {
      boxSizing: "border-box",
    },
    "*::after": {
      boxSizing: "border-box",
    },
  },
  html: {
    backgroundColor: "$black100",
    "&:focus-within": {
      scrollBehavior: "smooth",
    },
  },
  body: {
    margin: 0,
    overflow: "hidden",
    minHeight: "100vh",
    // lineHeight: 1.5,
    textRendering: "optimizeLegibility",
    "-webkit-font-smoothing": "antialiased",
  },
  // img: {
  //   maxWidth: "100%",
  //   display: "block",
  // },
  // input: {
  //   fontFamily: "inherit",
  // },
  a: {
    "&:visited": {
      color: "$white",
    },
  },

  // Custom classes
  ".component-selected": {
    position: "relative",
    "&::after": {
      content: '" "',
      border: "2px dashed #f50057",
      borderRadius: "inherit",
      width: "100%",
      height: "100%",
      position: "absolute",
      left: "0",
      top: "0",
      pointerEvents: "none",
      display: "block",
    },
  },
  ".dropzone-selected": {
    position: "relative",
    "&::after": {
      content: '" "',
      border: "1px inset #57886c",
      borderRadius: "inherit",
      width: "100%",
      height: "100%",
      position: "absolute",
      left: "0",
      top: "0",
      pointerEvents: "none",
      display: "block",
      // boxShadow: "inset 5px 5px 15px 5px rgba(0,0,0,0.3)",
    },
  },
  ".page-selected": {
    position: "relative",
    "&::after": {
      content: '" "',
      border: "2px outset #f50057",
      borderBottomColor: "transparent",
      borderRadius: "inherit",
      width: "calc((100vw - 520px) * .9)",
      height: "calc(100% - 119px)",
      position: "fixed",
      left: "50%",
      bottom: "0",
      transform: "translateX(-50%)",
      pointerEvents: "none",
      display: "block",
    },
  },
  ".dropdown-font-family": {
    fontFamily: "$ddin",
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
