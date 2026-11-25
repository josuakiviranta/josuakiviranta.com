import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    // Next sets `lang` from the address's language (en, fi, it).
    <Html>
      <Head>
        {/* Latin Modern Roman, self-hosted (see @font-face in globals.css). */}
        <link
          rel="preload"
          href="/fonts/lmroman10-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/lmroman12-bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
