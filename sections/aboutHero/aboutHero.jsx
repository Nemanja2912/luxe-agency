import Heading1 from "@/components/headings/heading1";

const AboutHero = () => {
  return (
    <div className="container about-hero">
      <div className="fade-up">
        <Heading1>
          We are <br /> Luxe Agency Co
        </Heading1>
      </div>
      <p className="fade-up">
        Welcome to Luxe, your go to agency for taking <br /> your OF career into
        the top 0.1% of creators
      </p>

      <div className="fade-up">
        <img src="./images/about.jpg" alt="" />
      </div>
    </div>
  );
};

export default AboutHero;
