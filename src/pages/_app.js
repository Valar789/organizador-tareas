import "@/styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> Valar789 👨🏻‍💻</title>
      </Head>
      <NavBar/>
      <Component {...pageProps} />
      <Analytics/>
    </>
  );
}
