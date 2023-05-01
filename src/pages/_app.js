import "@/styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> Valar789 👨🏻‍💻</title>
      </Head>
      <Component {...pageProps} />
      <Analytics/>
    </>
  );
}
