import Link from "next/link";
import Heading3 from "../headings/heading3";

const BlogCard = ({ image, title, link }) => {
  return (
    <Link href={link}>
      <div className="blog-card">
        <img src={image} alt="" />
        <Heading3>{title}</Heading3>
      </div>
    </Link>
  );
};

export default BlogCard;
