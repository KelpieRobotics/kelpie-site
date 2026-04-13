import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/assets/branding/kelpii.svg" type="image/svg" />
      </Head>
      <body>
        <div className="bg-container"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
