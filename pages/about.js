import About from "@/sections/about/about";
import AboutDescription from "@/sections/aboutDescription/aboutDescription";
import AboutHero from "@/sections/aboutHero/aboutHero";
import Hero from "@/sections/hero/hero";
import Services from "@/sections/services/services";

const AboutUs = () => {
  return (
    <div>
      <AboutHero />
      <AboutDescription />
      <Services />
      <Hero
        text="Get started with your modelling career and capitalise on the goldmine that is Only Fans. Click the button below and allow us to help you monetize your audience."
        heading={2}
        author="- Sarah, OnlyFans Creator"
        image={"images/testimonials.jpg"}
      />
      <About
        title="Become A Talent Of Ours"
        description="Interested in partnering up with Luxe Agency Co? Either refer a model our way or become a talent of ours yourself. Click the button below and have a 15 minute free online consult with us about how this will work for you, and whats involved with getting started"
        button="Apply Now"
        image="images/about2.png"
      />
    </div>
  );
};

export default AboutUs;
