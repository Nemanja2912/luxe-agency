import "@/styles/globals.css";

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
      <Navigation />
      <Component {...pageProps} />
      <TelegramButton />
      <Footer />
    </main>
  );
}
