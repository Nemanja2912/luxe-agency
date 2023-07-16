import Button from "../button/button";
import Heading2 from "../headings/heading2";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="service-card">
      <div className="left scroll noshow fade-up">
        <Heading2>{title}</Heading2>
        <p>{description}</p>
        <Button>Apply Now</Button>
      </div>
      <div className="image scroll noshow image-overlay image-down">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default ServiceCard;
