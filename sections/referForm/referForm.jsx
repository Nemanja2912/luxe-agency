import Heading2 from "@/components/headings/heading2";
import Heading3 from "@/components/headings/heading3";

const ReferForm = () => {
  return (
    <div className="container refer-form">
      <div className="left scroll fade-up noshow">
        <Heading2>
          Share Luxe with your network and get paid up to 6 figures a year
        </Heading2>

        <p>
          It pays to be part of our referral program/ be a affiliate partner of
          Luxe. Every time you refer someone who joins up as a model we pay you
          10% of our management fee EVERY MONTH for as long as you keep
          referring.
          <br />
          <br />
          Not only that, but if your referral refers a model who joins us, we'll
          pay you 5% of our management fee from them too.
        </p>
      </div>

      <div className="right scroll fade-up noshow">
        <Heading3>Your Information</Heading3>
        <ReferInput placeholder="Name" />
        <ReferInput placeholder="Email" />
        <ReferInput placeholder="Phone" />
        <br />
        <Heading3>Friend’s Information</Heading3>
        <ReferInput placeholder="Name" />
        <ReferInput placeholder="Email" />
        <ReferInput placeholder="Phone" />
        <ReferInput placeholder="Instagram" /> <br />
        <div className="refer-btn">Submit</div>
      </div>
    </div>
  );
};

export default ReferForm;

const ReferInput = ({ placeholder }) => {
  return (
    <div>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};
