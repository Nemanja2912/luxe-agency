import Faq from "@/sections/faq/faq";
import Hero from "@/sections/hero/hero";
import Partner from "@/sections/partner/partner";
import ReferForm from "@/sections/referForm/referForm";
import ReferalProgram from "@/sections/referalProgram/referalProgram";

const lists = [
  {
    question: "How do I get paid?",
    answer:
      "Once you've referred your first model every single month we will pay you to your nominated bank account at a set time every single month",
  },
  {
    question: "What's the commission?",
    answer:
      "We will pay you 20% of our management fee, so if you refer someone and they make $10,000 in one month, our typical management fee is 50% so you'll get $1,000 USD every single month for doing no work after that for that creator.",
  },
  {
    question: "How long do the referral fees last for?",
    answer:
      "You must refer a new creator every single month, that's the requirements, so every single month you need to refer one new creator to Luxe that signs up.",
  },
  {
    question: "Where do I find creators to refer?",
    answer:
      "You can find creators on Tinder, Bumble any dating app that you can find on Google. Although, the best way is if you're a girl, post your earnings on Instagram and tell people you will help them get started, if you're interested in this, message us and ask for a screenshot.",
  },
];

const Refer = () => {
  return (
    <div>
      <Hero
        text={"We have one of the BEST referral programs on the market"}
        image={"images/refer.jpg"}
      ></Hero>
      <ReferForm />
      <ReferalProgram />
      <Faq lists={lists} />
      <Partner />
    </div>
  );
};

export default Refer;
