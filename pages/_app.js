import "@/styles/globals.css";
import Head from "next/head";

import { Raleway } from "next/font/google";
import { useEffect } from "react";

const raleway = Raleway({ subsets: ["latin"] });

import Navigation from "@/containers/navigation/navigation";
import Footer from "@/sections/footer/footer";
import TelegramButton from "@/components/telegramButton/telegramButton";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document?.querySelectorAll(".scroll");
      scrollElements.forEach((element) => {
        const elementTop = element?.getBoundingClientRect().top;
        const elementHeight = element?.offsetHeight;
        const windowHeight = window?.innerHeight;

        if (
          elementTop <= windowHeight / 2 &&
          elementTop + elementHeight >= windowHeight / 2
        ) {
          element.classList.remove("noshow");

          element.classList.remove("scroll");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className={raleway.className}>
      <Head>
        <title>
          All Inclusive Only Fans Management Agency | Luxe Agency Co®
        </title>
        <meta
          name="description"
          content="We help new and established creators make 100k+ a year from monetizing their social media, so that they can travel, have FUN, and live their best life."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <TelegramButton />
      <Footer />
    </main>
  );
}
