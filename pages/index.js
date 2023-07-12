import Head from "next/head";
import Image from "next/image";
import { Raleway } from "next/font/google";
import Navigation from "@/containers/navigation/navigation";
import Hero from "@/sections/hero/hero";
import About from "@/sections/about/about";
import Experience from "@/sections/experience/experience";
import { useEffect } from "react";
import Why from "@/sections/why/why";
import Blog from "@/sections/blog/blog";
import Faq from "@/sections/faq/faq";
import Result from "@/sections/result/result";
import Footer from "@/sections/footer/footer";

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll(".scroll");
      scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;

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
    <>
      <Head>
        <title>Luxe Agency</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${raleway.className}`}>
        <Navigation />
        <Hero
          text="Make 6 Figures A Year From Monetizing Your Social Media, Allowing You
          To Travel The World & Live Your Best Life."
          image={"images/main-hero.jpg"}
        />
        <About />
        <Experience />
        <Why />
        <Blog />
        <Faq />
        <Result />
        <Hero
          text="Get started with your modelling career and capitalise on the goldmine that is Only Fans. Click the button below and allow us to help you monetize your audience."
          heading={2}
          image={"images/image.jpg"}
        />
        <Footer />
      </main>
    </>
  );
}
