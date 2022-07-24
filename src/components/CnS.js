import React from "react";
import styled from "styled-components";
import sell1 from "../assets/sell1.png";
import sell2 from "../assets/sell2.png";
import sell3 from "../assets/sell3.png";
import Button from "../components/button.js";

const CreateAndSell = () => {
  const data = [
    {
      image: sell1,
      title: "Create your collection",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      buttonText: "Create",
    },
    {
      image: sell2,
      title: "Add your NFTs",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      buttonText: "Add NFT",
    },
    {
      image: sell3,
      title: "List them for sale",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      buttonText: "Sell Now",
    },
  ];
  return (
    <div className="cns">
      <div className="title">
        <h1 style={{ textAlign: "center", paddingBottom: "2rem" }}>
          Create and Sell Your NFTs
        </h1>
      </div>
      <div className="container1">
        <div className="ellipse1"></div>
        <div className="content1">
          {data.map(({ image, title, description, buttonText }, index) => {
            return (
              <div className="createAndSell" key={index}>
                <div className="image1">
                  <card>
                    <img src={image} alt="create and sell" />
                  </card>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>

                <Button text={buttonText} blue={index === 1} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CreateAndSell;
