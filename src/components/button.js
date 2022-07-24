import React from "react";
import styled from "styled-components";

const Button = ({ text, blue = false }) => {
  return (
    <>
      <button className={`${blue ? "blue" : ""}`}>{text}</button>
    </>
  );
};

export default Button;
