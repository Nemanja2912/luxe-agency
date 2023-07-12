import BlogCard from "@/components/blogCard/blogCard";
import MoveText from "@/components/moveText/moveText";
import { useEffect, useRef } from "react";

const content = [
  {
    image: "./images/blog1.jpg",
    title: "Exploring Freedom with OnlyFans & PG Rated Content",
  },
  {
    image: "./images/blog2.jpg",
    title:
      "Why you NEED an agency to help you hit the top 1% of Only Fans Models",
  },
  {
    image: "./images/blog3.jpg",
    title: "The beginners guide to using Tik Tok for Only Fans promotion",
  },
  {
    image: "./images/blog4.png",
    title:
      "Earning Potential: 5 Reasons Non-Professional Women Can Make Six Figures a Year on OnlyFans",
  },
];

const Blog = () => {
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
    <section className="blog black">
      <MoveText text={["View", "Our", "Blogs"]} active={0} />

      <div className="slider-overlay scroll noshow fade-up" ref={sliderRef}>
        <div className="slider">
          {content.map((item) => (
            <BlogCard title={item.title} image={item.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
