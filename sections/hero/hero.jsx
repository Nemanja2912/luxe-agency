import Button from "@/components/button/button";
import Heading1 from "@/components/headings/heading1";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container flex-center fade-up">
        <Heading1 style={{ maxWidth: "75%" }}>
          Make 6 Figures A Year From Monetizing Your Social Media, Allowing You
          To Travel The World & Live Your Best Life.
        </Heading1>
        <Button>Apply Now</Button>
      </div>
    </section>
  );
};

export default Hero;
