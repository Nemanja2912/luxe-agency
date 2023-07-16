import Button from "@/components/button/button";
import Heading2 from "@/components/headings/heading2";

const Partner = () => {
  return (
    <div className="partner">
      <div className="container">
        <div className="partner-content">
          <Heading2>
            Partner up with Luxe and get paid every month ongoing
          </Heading2>
          <p>
            Keep referring models our way and we'll pay you 10% of our
            management fee from them each and every month. <br />
            <br /> You can make more than the average adult salary per year
            solely from just referring people to us.
          </p>

          <Button>Refer Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Partner;
