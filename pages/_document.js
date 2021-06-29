import Document, { Html, Head, Main, NextScript } from "next/document";
import { getCssString } from "../stitches.config";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/hkinight.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/hkinight.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/grifter-bold.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/grifter-bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/d-dinexp.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/d-dinexp.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          {/* <style
            dangerouslySetInnerHTML={{
              __html: `
              @font-face {
                font-family: 'HKI Nightlife';
                font-weight: 400;
                font-display: swap;
                src: url(/fonts/hkinight.woff2) format('woff2'), url(/fonts/hkinight.woff) format('woff');
              }
              @font-face {
                font-family: 'GRIFTER';
                font-weight: 400;
                font-display: swap;
                src: url(/fonts/grifter-bold.woff2) format('woff2'), url(/fonts/grifter-bold.woff) format('woff');
              }
              @font-face {
                font-family: 'D-DIN Exp';
                font-weight: 400;
                font-display: swap;
                src: url(/fonts/d-dinexp.woff2) format('woff2'), url(/fonts/d-dinexp.woff) format('woff');
              }
              `,
            }}
          /> */}
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
