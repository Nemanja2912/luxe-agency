import ExperienceCard from "@/components/experienceCard/experienceCard";
import MoveText from "@/components/moveText/moveText";
import { useEffect, useRef } from "react";

const content = [
  {
    image: "/images/exp1.jpg",
    title: "Account Audit & Market Research",
    desc: "Our expert team will conduct a thorough account audit, examining your social media platforms, content quality, engagement metrics, and overall brand image. We'll identify areas of improvement and provide valuable insights to enhance your online presence.",
  },
  {
    image: "/images/exp2.jpg",
    title: "Content Creation Photography",
    desc: "Our team of expert coaches is available for daily and weekly one-on-one calls to provide you with the necessary help at any time. Whether you need a solution to a challenge you're facing, advice on achieving your goals, or simply motivation to progress, our coaches will be by your side.",
  },
  {
    image: "/images/exp1.jpg",
    title: "Account Audit & Market Research",
    desc: "Our expert team will conduct a thorough account audit, examining your social media platforms, content quality, engagement metrics, and overall brand image. We'll identify areas of improvement and provide valuable insights to enhance your online presence.",
  },
  {
    image: "/images/exp1.jpg",
    title: "Account Audit & Market Research",
    desc: "Our expert team will conduct a thorough account audit, examining your social media platforms, content quality, engagement metrics, and overall brand image. We'll identify areas of improvement and provide valuable insights to enhance your online presence.",
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
