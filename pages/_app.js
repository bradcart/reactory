import "../styles/globals.scss";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { IdProvider } from "@radix-ui/react-id";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <IdProvider>
        <Component {...pageProps} />
      </IdProvider>
    </ThemeProvider>
  );
}

export default MyApp;
