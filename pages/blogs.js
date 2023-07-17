import BlogCard from "@/components/blogCard/blogCard";
import MoveText from "@/components/moveText/moveText";
import Hero from "@/sections/hero/hero";

const blogList = [
  {
    title:
      "7 Compelling reasons why starting an only fans business empowers women ",
    image: "images/blog4.png",
    link: "/7-compelling-reason",
  },
  {
    title:
      "Why Starting an OnlyFans Business Outshines Getting Into Dropshipping",
    image: "images/blogPost2.jpg",
    link: "/starting-of",
  },
  {
    title:
      "Conquering the Fear: 5 Ways to Overcome Hesitations and Start Your OnlyFans Business",
    image: "images/blogPost3.jpg",
    link: "/conquering-the-fear",
  },
  {
    title:
      "Earning Potential: 5 Reasons Non-Professional Women Can Make Six Figures a Year on OnlyFans",
    image: "images/blogPost4.jpg",
    link: "/unlocking-earning-potential",
  },
  {
    title:
      "Seizing the Opportunity: 5 Reasons Why Now is the Perfect Time to Become an OnlyFans Creator and Capitalize on the Market",
    image: "images/blogPost5.jpg",
    link: "/seizing-the-opportunity",
  },
  {
    title: "Exploring Freedom with OnlyFans & PG Rated Content",
    image: "images/blogPost6.jpg",
    link: "/exploring-freedom",
  },
];

const Blogs = () => {
  return (
    <div className="blogs">
      <MoveText text={["Work", "SMARTER", "not", "harder"]} active={0} />

      <div className="container">
        <p className="blogs-desc">
          Learn valuable insights to prepare you for a new career in the Only
          Fans space OR to help you take what you're doing and level up
          exponentially.
        </p>

        <div className="blog-cards">
          {blogList.map((item) => (
            <BlogCard
              title={item.title}
              image={item.image}
              link={item.link}
            ></BlogCard>
          ))}
        </div>
      </div>

      <Hero
        text={"Account  management with benefits"}
        author={
          "You could be earning money 24/7 as a Luxe model with unrivalled support and strategies inspiring you to grow and keep reaping our agency benefits."
        }
        heading={2}
        image="images/blogs.jpg"
        noquote
      />
    </div>
  );
};

export default Blogs;
