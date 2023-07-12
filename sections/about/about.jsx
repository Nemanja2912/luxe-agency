import Button from "@/components/button/button";
import Heading1 from "@/components/headings/heading1";

const About = () => {
  return (
    <section className="about-section">
      <div className="container about">
        <div className="about-left scroll noshow fade-up">
          <Heading1>Abous Us</Heading1>
          <p>
            Luxe Agency Co is one of the most prominent agencies for Only Fans
            Creators. We do the heavy lifting on the business side of things for
            you so that you can make more money, have more fun, and have your
            beauty get noticed in the world.
          </p>

          <Button secondary>Learn More</Button>
        </div>
        <div className="scroll noshow image-overlay image-down">
          <img src="./images/about1.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
