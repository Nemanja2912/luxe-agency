import Heading3 from "../headings/heading3";

const BlogCard = ({ image, title }) => {
  return (
    <div className="blog-card">
      <img src={image} alt="" />
      <Heading3>{title}</Heading3>
    </div>
  );
};

export default BlogCard;
