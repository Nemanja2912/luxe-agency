import Heading2 from "@/components/headings/heading2";
import Heading3 from "@/components/headings/heading3";
import axios from "axios";
import { useState } from "react";

const ReferForm = () => {
  const [inputState, setInputState] = useState({
    name: "",
    email: "",
    phone: "",
    friendName: "",
    friendEmail: "",
    friendPhone: "",
    friendInstagram: "",
  });

  const handleType = (type, inputEvent) => {
    console.log(inputEvent.target.value);

    setInputState((prev) => {
      prev[type] = inputEvent.target.value;

      return {
        ...prev,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://sheet.best/api/sheets/ffa69cae-12b6-48ba-ace2-3ef2303020b4",
        { ...inputState, timestamp: new Date() }
      )
      .then((response) => {
        setInputState({
          name: "",
          email: "",
          phone: "",
          friendName: "",
          friendEmail: "",
          friendPhone: "",
          friendInstagram: "",
        });
      })
      .catch((err) => console.log(err));
  };

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
        <form onSubmit={handleSubmit}>
          <ReferInput
            value={inputState.name}
            onChange={(e) => handleType("name", e)}
            name="name"
            placeholder="Name"
          />
          <ReferInput
            onChange={(e) => handleType("email", e)}
            value={inputState.email}
            name="email"
            placeholder="Email"
          />
          <ReferInput
            onChange={(e) => handleType("phone", e)}
            value={inputState.phone}
            name="phone"
            placeholder="Phone"
          />
          <br />
          <Heading3>Friend’s Information</Heading3>
          <ReferInput
            onChange={(e) => handleType("friendName", e)}
            value={inputState.friendName}
            name="friendName"
            placeholder="Name"
          />
          <ReferInput
            onChange={(e) => handleType("friendEmail", e)}
            value={inputState.friendEmail}
            name="friendEmail"
            placeholder="Email"
          />
          <ReferInput
            onChange={(e) => handleType("friendPhone", e)}
            value={inputState.friendPhone}
            name="friendPhone"
            placeholder="Phone"
          />
          <ReferInput
            onChange={(e) => handleType("friendInstagram", e)}
            value={inputState.friendInstagram}
            name="friendInstagram"
            placeholder="Instagram"
          />
          <br />
          <button className="refer-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReferForm;

const ReferInput = ({ placeholder, value, onChange, name }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};
