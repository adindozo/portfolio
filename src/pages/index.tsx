import Head from "next/head";
import Picture from "../components/Picture";
import Work from "../components/Work";
import Tools from "../components/Tools";
import Companies from "../components/Companies";
import Contact from "../components/Contact";
import { FC, useEffect, useState } from "react";
import ScrollTop from "../components/ScrollTop";
import dynamic from "next/dynamic";
import { Partytown } from '@builder.io/partytown/react';
import { FaLess } from "react-icons/fa";
const LayoutGroup = dynamic(() => import('framer-motion').then((mod) => mod.LayoutGroup), {
  ssr: false,
})

const DynamicNav = dynamic(() => import("../components/Nav"));

const Home: FC = () => {
  const [scrollTop, setScrollTop] = useState(false);

  const toggleVisibility = () => {
    if (typeof window !== "undefined") {
      if (window.pageYOffset > 300) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisibility);
    }
  }, []);

  return (
    <>
      <Head>
        <Partytown debug={false} forward={['dataLayer.push']}/>
        <title>Adin Đozo</title>
        <meta
          name="description"
          content="Adin Đozo's Portfolio website."
        />
        <meta property="og:title" content="Adin Đozo's portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Adin Đozo's portfolio website, built with Next.js." />
        <meta property="description" content="Adin Đozo's portfolio website, built with Next.js." />
        <meta name="theme-color" content="#FFF1" />
        <link rel="icon" href="static/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com&display=optional" />
        <link href="./adin-dozo.webp" sizes="100%" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        {/* <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>AOS.init();</script> */}
      </Head>
      <LayoutGroup>
        {typeof window !== "undefined" && <DynamicNav />}
        {/* <img src="/static/certificate1.png" alt="" /> */}
        <Picture />
        <Work />
        <Tools />
        <Companies />
        <Contact />
      </LayoutGroup>
      {scrollTop && <ScrollTop />}
    </>
  );
};

export default Home;
