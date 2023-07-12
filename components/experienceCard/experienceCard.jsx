import Heading3 from "../headings/heading3";

const ExperienceCard = ({ image, title, description }) => {
  return (
    <div className="experience-card">
      <img src={image} alt="" />
      <Heading3>{title}</Heading3>
      <p>{description}</p>
    </div>
  );
};

export default ExperienceCard;
