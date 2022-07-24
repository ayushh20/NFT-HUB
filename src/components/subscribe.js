import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import subscribe from "../assets/subscribe.png";

const Sub = () => {
  return (
    <div className="sub">
      <div className="content4">
        <h2 style={{ color: "black", lineHeight: "2rem" }}>
          Subscribe for Get update every New offers.
        </h2>
        <p
          style={{
            color: "#7b7e86",
            lineheight: "2rem",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
        <div className="input-container">
          <input
            style={{
              border: "none",
              height: "1.5rem",
              paddingleft: "2rem",
              paddingright: "5rem",
              fontsize: "1.3rem",
            }}
            type="text"
            placeholder="Enter Email"
          />
          <BsFillArrowRightCircleFill />
        </div>
        <div className="image4">
          <img
            style={{
              alignItems: "screenRight",
              width: 400,
              height: 400,
              display: "flex",
            }}
            src={subscribe}
            alt="subscribe"
          />
        </div>
      </div>
    </div>
  );
};

export default Sub;
