import React from "react";
import FaqItem from "../../components/faqItem/faqItem";
import Heading1 from "@/components/headings/heading1";

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

const Faq = () => {
  return (
    <section className="faq red ">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Heading1>Luxe's Frequently Asked Questions</Heading1>
        </div>

        <div className="faq-wrapper">
          {lists.map((item, index) => (
            <FaqItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
