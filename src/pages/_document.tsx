import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="icon" href="/assets/branding/favicon.png" type="image/png" />

      </Head>
      {/* <body class="bg-no-repeat bg-center bg-fixed bg-[url('/assets/gallery/2022-pool-test-1/1.jpg')] backdrop-blur-sm backdrop-brightness-50 min-h-screen"> */}
        <body>
        <div className="bg-container">
        <div className="bg-image"></div>
        <div className="blur-overlay"></div>
      </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
