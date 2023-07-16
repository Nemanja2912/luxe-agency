import React from "react";
import FaqItem from "../../components/faqItem/faqItem";
import Heading1 from "@/components/headings/heading1";

const Faq = ({ lists = [] }) => {
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
