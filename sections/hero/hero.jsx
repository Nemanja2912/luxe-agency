import Button from "@/components/button/button";
import Heading1 from "@/components/headings/heading1";
import Heading2 from "../../components/headings/heading2";

const Hero = ({ text, heading = 1, image }) => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div
        className={`container flex-center fade-up ${
          heading !== 1 ? "scroll noshow" : ""
        }`}
        style={{ animationDelay: heading === 1 ? "1s" : "0s" }}
      >
        {heading === 1 ? (
          <Heading1 style={{ maxWidth: "750px" }}>{text}</Heading1>
        ) : (
          <Heading2 style={{ maxWidth: "825px" }}>{text}</Heading2>
        )}

        <Button>Apply Now</Button>
      </div>
    </section>
  );
};

export default Hero;
