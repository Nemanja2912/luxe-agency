import Head from "next/head";
import Hero from "@/sections/hero/hero";
import About from "@/sections/about/about";
import Experience from "@/sections/experience/experience";

import Why from "@/sections/why/why";
import Blog from "@/sections/blog/blog";
import Faq from "@/sections/faq/faq";
import Result from "@/sections/result/result";

const lists = [
  {
    question: "What type of content do I have to create?",
    answer:
      "You can create whatever content you personally feel like, we have creators who are provocative and we have creators who don't really do anything, both make money, some make more than others. We're professionals, we run a classy outfit, we know what we're doing and we know how to conduct ourselves in a way that protects you, hence why if you're accepted to work with us you will get content removal from the internet partnerships.",
  },
  {
    question: "How much can I make with an OF account?",
    answer:
      "To give you a real world example, we had a creator sign up, she had 2,300 instagram followers, she did a total of 6 instagram stories over the period of a month and she made $800 USD. We also had another creator who started with 4000 followers and she posted a story with us every single day and she made $5,000 USD in her first month. More volume of content production = more sales.",
  },
  {
    question: "Why do I need a management agency?",
    answer:
      "Most girls who are creating get to around $1,000 a month and just slow down, with a management service you have a team behind you that are generating sales every single day, so that $1,000 turns into $20,000 per month and you don't have to do any work, you just have to take photos, go to the coolest places and look pretty.",
  },
  {
    question: "Can I do this anywhere in the world?",
    answer:
      "Yes, we have girls all over the world doing this, we can run your account and pay you from anywhere, we're multi-international company, so it doesn't matter if you're in Europe or Australia, we can manage you.",
  },
  {
    question: "What's the management fee and how do I get paid?",
    answer:
      "Yes, we take a management, you can go to the about us page to see our list of services - we will do all of the heavy lifting for you, as we said, all you have to do is look pretty, dress nice and have fun! Let the profits roll into your account, you can make multi 6-figures and set yourself up for life through investing, this is a once in a life time opportunity.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Luxe Agency</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero
          text="Make 6 Figures A Year From Monetizing Your Social Media, Allowing You
          To Travel The World & Live Your Best Life."
          image={"images/main-hero.jpg"}
        />
        <About
          title="Abous Us"
          description="Luxe Agency Co is one of the most prominent agencies for Only Fans
            Creators. We do the heavy lifting on the business side of things for
            you so that you can make more money, have more fun, and have your
            beauty get noticed in the world."
          button="Learn More"
          image="images/about1.png"
        />
        <Experience />
        <Why />
        <Blog />
        <Faq lists={lists} />
        <Result />
        <Hero
          text="Get started with your modelling career and capitalise on the goldmine that is Only Fans. Click the button below and allow us to help you monetize your audience."
          heading={2}
          image={"images/image.jpg"}
        />
      </main>
    </>
  );
}
