import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

export default function App(props: AppProps) {
  const { Component } = props;

  return (
    <html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Fresh project | starter code</title>
        <link rel="icon" type="image/png" href="../favicon.ico"></link>
        <link rel="stylesheet" href="../styles/tailwind.css" />
      </Head>
      <body>
        <Component />
      </body>
    </html>
  );
}
