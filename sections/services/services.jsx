import ServiceCard from "@/components/serviceCard/serviceCard";

const content = [
  {
    title: "Account Audit & Market Research",
    description:
      "At Luxe Agency, we offer a comprehensive approach to optimizing your social media presence. This includes auditing your profiles, creating a content plan, and maximizing your earnings on OnlyFans. Our goal is to empower you to become the best version of yourself and achieve your  financial, personal, and social media goals.",
    image: "./images/service1.jpg",
  },
  {
    title: "Next Level Support",
    description:
      "At Luxe Agency, we provide 24/7 messaging support through Slack for prompt assistance. Additionally, we conduct weekly growth/coaching calls to enhance your social media performance and offer valuable insights. With our comprehensive support, we aim to optimize your brand's online presence and help you succeed in the competitive social media landscape.",
    image: "./images/service2.png",
  },
  {
    title: "Brand & Growth Management ",
    description:
      "At Luxe Agency, we offer comprehensive social media account management across platforms like Instagram, OnlyFans (OF), TikTok, Twitter, Facebook, and more. Our dedicated team provides 24/7 live engagement services, generating real followers and likes for your content. We also closely monitor your accounts and industry trends, ensuring your brand is constantly growing and staying ahead of competitors. ",
    image: "./images/service3.png",
  },
  {
    title: "Content Creation",
    description:
      "As you evolve in your journey with us you'll get to a stage where we PAY for professional photoshoots for you to take your content to the next level.  We'll coach you to take better photos and videos for your OF & your socials, and schedule it for the best times so that you get the most engagement",
    image: "./images/service4.jpg",
  },
];

const Services = () => {
  return (
    <div className="black services">
      <h1 className="fade-up scroll noshow">Our Services</h1>

      {content.map((item) => (
        <ServiceCard
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Services;
