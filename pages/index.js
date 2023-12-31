import Hero from "@/sections/hero/hero";
import About from "@/sections/about/about";
import Experience from "@/sections/experience/experience";

import Why from "@/sections/why/why";
import Blog from "@/sections/blog/blog";
import Faq from "@/sections/faq/faq";
import Result from "@/sections/result/result";

const lists = [
  {
    question: "What type of content do I need to create? ",
    answer:
      "You will get to create whatever sort of content you feel happy with. We have models doing nudes and porn, through to plenty who do seductive lingerie pics, and others that just do basic thirst traps and don’t show the spicy bits ever. We’re professionals and run a first class experience so we absolutely will NOT make you do any sort of content you’re not comfortable with, and we will always conduct ourselves in a way that protects you. ",
  },
  {
    question: "How much money can I make by doing Only Fans?",
    answer:
      "It depends. The average creator doing it solo wont clear $200 per month. But some real world examples of our models; we had a model sign up who had just over 2000 followers, she did a total of 6 IG stories over a month and made $800USD. We also had a model with a following of over 4k subscribers and she posted a story every single day and did $500USD in her first month. More volume of content production on your social media like we teach you means more people being funnelled into your OF where we can make you more sales = MORE MONEY!",
  },
  {
    question: "Why do I need a management agency to help?",
    answer:
      "You don’t necessarily need one BUT if you want to make more than just hobby income and want to really take a slice of the Only Fans goldmine then having an agency help you run it as a business is one of the BEST things you can do. With an agency that is behind you and running your account for you full time = you’ll be making more and more money with each passing month while all you’re doing is taking pics and videos for us while looking pretty. ",
  },
  {
    question: "Can I do this anywhere in the world?",
    answer:
      "Yes you absolutely can. We have girls all over the world who are Luxe models that have partnered with us. The power of the internet will allow us to run your account for you wherever you are and pay you wherever you are as well; so regardless of whether you’re in Europe, Australia, USA, or out in the Amazon Jungle; provided you’ve got some access to WIFI and a good quality phone we can work with you. ",
  },
  {
    question: "How much does it cost to work with you?",
    answer:
      "You won’t be paying any of your own money to work with us but instead we have our management fee which gets taken from your OF profits each week. Head to the About Us section to see how we do ALL of the heavy lifting of running your business for you; so that all you have to do is make content for us each week, and watch the profits roll in as we help you chase down multi six figures a year passive income. ",
  },
  {
    question: "Can I run this anonymously?",
    answer:
      "We’ve had plenty of women who want to do this anonymously and that’s fine. Whether it be because you’re a teacher, or work for the government, or have kids or exes or friends that you don’t want to find out about your OF initiatives. That’s all find and can easily be navigated. So nothing to fear and everything to gain. ",
  },
  {
    question: "Do I need to be slim or toned to do well? ",
    answer:
      "Absolutely not. You can do well regardless of your body type so please DONT think to yourself that you need to lose some weight before starting an OF. Some of our most successful models are BBW or really curvy. Millions of guys love women with some extra loving on their body just like millions will love lean toned women.",
  },
];

export default function Home() {
  return (
    <>
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
          link="/about"
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
