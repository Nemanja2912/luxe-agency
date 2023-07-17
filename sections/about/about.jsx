import Button from "@/components/button/button";
import Heading1 from "@/components/headings/heading1";

const About = ({ title, description, button, image, link = undefined }) => {
  return (
    <section className="about-section">
      <div className="container about">
        <div className="about-left scroll noshow fade-up">
          <Heading1>{title}</Heading1>
          <p>{description}</p>

          <Button secondary link={link}>
            {button}
          </Button>
        </div>
        <div className="scroll noshow image-overlay image-down">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
