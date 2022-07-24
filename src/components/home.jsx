import React from "react";
import Navbar from "./navbar";
import Clients from "./clients";
import CreateAndSell from "./CnS";

import hero from "../assets/hero.png";
import heroText from "../assets/heroText.png";

const Home = () => {
  return (
    <section>
      <Navbar />
      <div className="ellipse"></div>
      <div className="container">
        <div className="content">
          <h1>
            Explore Our
            <span>
              <img src={heroText} alt="heroText"></img>
            </span>
            Hero Text Digital NFT Marketplace.
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            rem praesentium reprehenderit, possimus sit molestiae ratione saepe
            quam magni cupiditate repellat at reiciendis, voluptate, amet animi.
            Modi distinctio ab veniam.
          </p>
          <div className="button">
            <button className="btn1">Explore Now</button>
            <button className="btn2">Create NFT</button>
          </div>

          <div className="data">
            <div className="dataTab">
              <h2>40k</h2>
              <h5>Artwork</h5>
            </div>
            <div className="dataTab">
              <h2>12k</h2>
              <h5>Auction</h5>
            </div>
            <div className="dataTab">
              <h2>20k</h2>
              <h5>Artist</h5>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={hero} alt="hero" />
        </div>
      </div>

      <Clients />
      <CreateAndSell />
    </section>
  );
};

export default Home;
