import Faq from "@/sections/faq/faq";
import Hero from "@/sections/hero/hero";
import Partner from "@/sections/partner/partner";
import ReferForm from "@/sections/referForm/referForm";
import ReferalProgram from "@/sections/referalProgram/referalProgram";

const lists = [
  {
    question: "How will you pay me?",
    answer:
      "We keep track of your referrals in a specific spreadsheet. Same time each month we will pay you directly into your nominated bank account.",
  },
  {
    question: "How do the referral commissions work",
    answer:
      "10% of our management fee from each of the referrals you’ve sent us will be transferred straight into your nominated bank account= repeat passive income for you that keeps increasing. So, if you refer us someone and we soon have them making 10k per month, then we would take $5000 of that and you would receive $500 per month passively.",
  },
  {
    question: "How long will I keep being paid for my referrals?",
    answer:
      "You’re required to send us one new referral each month. This is a non-negotiable requirement and is easy to do and allows you to make 6 figures a year from referral commissions alone for minimal work. Keep referring = keep getting paid!",
  },
  {
    question: "Where do I find creators to refer??",
    answer:
      "We have a training portal that will coach you with how to do this easily regardless of whether you’re a new or established creator joining us as a Luxe model. But you can easily line up referrals using your social media, where we give you template story posts with income screenshots you can use and tell people you’ll help them get started with their OF journey, if you’re interested click here etc; we’ve got you covered!",
  },
  {
    question: "Is this network marketing or MLM? ",
    answer:
      "Fuck no. If anything, its affiliate marketing because you’re referring people in your network to our amazing service so that we can help them and you make more money. You probably refer people you know to your beautician or hairdresser and don’t get paid a commission, do you? Whereas with us we will reward you heavily!",
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
