import Heading2 from "@/components/headings/heading2";
import Heading3 from "@/components/headings/heading3";

const ReferalProgram = () => {
  return (
    <div className="referal-program">
      <div className="container">
        <div className="scroll fade-up noshow">
          <Heading2>
            What happens when you join <br /> the Luxe referral program
          </Heading2>
        </div>

        <div className="cards">
          <Card
            title="Put through your first referral"
            description={
              "Your referral speaks to our front of house Olivia and goes through our online consult. When they sign and onboard as a model we notify you and begin next steps."
            }
          />
          <Card
            title="Your own referral management portal"
            description={
              "We have nothing to hide and believe in honesty and trust so that means transparency with you. You'll see your referrals in real time, which means seeing how much income will be coming your way each month."
            }
          />
          <Card
            title="Big pay days"
            description={
              "If you keep up with referring us at least 1 model each month, by the time you've referred us 15 models you could be earning at least 10-20k per month. This is just the beginning as things truly compound."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ReferalProgram;

const Card = ({ title, description }) => {
  return (
    <div className="referal-card scroll fade-up noshow">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};
