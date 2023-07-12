import Button from "@/components/button/button";
import Heading1 from "@/components/headings/heading1";

const Why = () => {
  return (
    <section className="why">
      <div className="container">
        <div className="scroll noshow fade-up">
          <Heading1>
            Why You <br /> Should Become <br /> A Luxe Model
          </Heading1>
        </div>
        <div className="why-list">
          <div className="why-item scroll noshow fade-up">
            <div className="why-dot"></div>
            <p>You'll make easy money</p>
          </div>
          <div className="why-item scroll noshow fade-up">
            <div className="why-dot"></div>
            <p>You won’t have to work too hard</p>
          </div>
          <div className="why-item scroll noshow fade-up">
            <div className="why-dot"></div>
            <p>You'll feel rewarded for sharing your beauty</p>
          </div>
          <div className="why-item scroll noshow fade-up">
            <div className="why-dot"></div>
            <p>You value having support</p>
          </div>
          <div className="why-item scroll noshow fade-up">
            <div className="why-dot"></div>
            <p>You want experts to help you achieve your potential</p>
          </div>
        </div>
        <div className="scroll noshow fade-up">
          <Button>Apply Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Why;
