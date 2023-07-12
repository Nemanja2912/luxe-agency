import MoveText from "@/components/moveText/moveText";

import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  "images/r1.png",
  "images/r2.png",
  "images/r3.png",
  "images/r4.png",
  "images/r5.png",
  "images/r6.png",
  "images/r7.png",
  "images/r8.png",
];

const Result = () => {
  return (
    <section className="result">
      <MoveText text={["Results", "for", "days"]} active={0} />

      <p>
        Every successful model has an agency that has her back that she can rely
        on. Only Fans for most is a very competitive market and NOT EASY to grow
        & scale. Models face issues like no actual strategy, time poor to post
        regularly and engage with fans in DMs properly, and get bored so end up
        copying other models. You can't get into the top 1% alone. You need a
        team behind you to get results like this:
      </p>

      <div className="move-overlay">
        <div className="move-image">
          {images.map((image) => (
            <img src={image} alt="" />
          ))}
          {images.map((image) => (
            <img src={image} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Result;
