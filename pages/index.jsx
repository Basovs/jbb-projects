import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import Hero from "../components/Hero";
const GlobalStyle = createGlobalStyle`h1 {
  font-size: 38px;
}`;

export default function Home() {
  return (
    <>
      <Head>
        <title>SSR styled-components with Next.js Starter</title>
      </Head>
      <GlobalStyle />
      <Hero />
    </>
  );
}
