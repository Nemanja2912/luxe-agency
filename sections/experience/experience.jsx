import ExperienceCard from "@/components/experienceCard/experienceCard";
import MoveText from "@/components/moveText/moveText";
import { useEffect, useRef } from "react";

const content = [
  {
    image: "images/exp1.jpg",
    title: "ZERO of your own money to start",
    desc: "The average creator makes $160 per month and taps out within a few months because they’re not rich yet. We know money can be an issue for getting an agency’s help so rather than charging you directly, instead you pay us nothing of your own money and we take a management fee from your profits in the back end; which means anyone that’s serious about growth can afford us. ",
  },
  {
    image: "images/exp2.jpg",
    title: "Profits within 72 hours",
    desc: "Once you’ve crossed the ts and dotted the is and are onboarded into your own private Luxe communications channel with our team we commence getting your OF foundations as strong as possible before we get to work. The process is different depending on whether you’re a new or established creator or not, but doing this properly ensures we can get profits flowing in quickly and then pouring in before you know it. ",
  },
  {
    image: "images/exp3.jpg",
    title: "Consistent passive income",
    desc: "A common issue for creators is being able to keep up communication with their subscribers which leads to the model only really making money from subscriptions and occasional tips; and ultimately leads to most subscribers turning off their rebill or joining for a month then cancelling. How we overcome this is living in your profile as you full time managing your account for you; then all you focus on is supplying us free and paid material each week and we provide the real girlfriend experience to your subscribers in your feed and DMs.",
  },
  {
    image: "images/exp4.jpg",
    title: "Ongoing growth incentives",
    desc: "Our goal isn’t just to create some pocket money for you. We want you making more than what you do in your current job so that you can exit it if you want to, have more money than you know what to do with, and have options in life. 10k per month is our first major milestone we want to get you to, then as we hit new growth milestones of 15k months, 20k months, 30k months etc means more rewards and bonuses for you at each step.",
  },
  {
    image: "images/exp5.jpg",
    title: "Top 0.1% glory",
    desc: "Getting to this top tier means serious income, and a Luxe lifestyle to go with it. You’ve become an influencer, you are a well-known brand, and we’ll ensure you stay here and cement your spot in the OF hall of fame long term. This is why we partner with models for 3 years because this is a long-term game we’re playing. Team work will make this dream work, then come the 3 year mark we’ll provide options for renewal with more growth that awaits. ",
  },
];

const Experience = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!sliderRef) return;

    let mousePos, scrollLeft;
    const sliderElement = sliderRef.current;

    const moveSlider = (e) => {
      sliderElement.scrollLeft = scrollLeft + (mousePos - e.pageX);

      sliderRef.current.children[0].style.pointerEvents = "none";
    };

    const cleanMouseDown = () => {
      sliderElement.removeEventListener("mousemove", moveSlider);

      sliderRef.current.children[0].style.pointerEvents = "initial";
    };

    const scrollSlider = (e) => {
      mousePos = e.pageX;
      scrollLeft = sliderElement.scrollLeft;

      sliderElement.addEventListener("mousemove", moveSlider);
    };

    sliderElement.addEventListener("mousedown", scrollSlider);

    sliderElement.addEventListener("mouseup", cleanMouseDown);

    return () => {
      sliderElement.removeEventListener("mousedown", scrollSlider);
      sliderElement.removeEventListener("mouseup", cleanMouseDown);
    };
  }, [sliderRef]);
  return (
    <section className="experience black">
      <MoveText text={["The", "Luxe", "Experience"]} active={2}></MoveText>

      <div className="slider-overlay scroll noshow fade-up" ref={sliderRef}>
        <div className="slider">
          {content.map((item) => (
            <ExperienceCard
              title={item.title}
              description={item.desc}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
