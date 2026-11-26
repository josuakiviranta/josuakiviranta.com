import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    // Next sets `lang` from the address's language (en, fi, it).
    <Html>
      <Head>
        {/* Inter, self-hosted (see @font-face in styles/theme.css). */}
        <link
          rel="preload"
          href="/fonts/inter-latin-opsz-normal.woff2"
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
