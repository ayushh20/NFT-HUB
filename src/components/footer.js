import React from "react";
import styled from "styled-components";
import { AiFillFacebook } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

import logo from "../assets/logo.png";

const Footer = () => {
  const servicesLinks = ["Art", "Common", "Trading", "Rare", "Generic"];
  const companyLinks = ["Home", "About", "Marketplace", "Sellers", "Create"];
  const contactInfo = [
    {
      icon: <MdEmail />,
      value: "ayush@gmail.com",
    },
    {
      icon: <MdPhoneInTalk />,
      value: "+(91) 0123456789",
    },
    {
      icon: <IoLocationSharp />,
      value: "New Delhi, INDIA, 110045",
    },
  ];
  const socialIcons = [
    <AiFillFacebook />,
    <FaTwitterSquare />,
    <BsLinkedin />,
    <FaInstagramSquare />,
  ];
  return (
    <Container className="footer">
      <div className="row">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <p className="description">New Delhi, INDIA, 110045</p>
        <div className="social-icons">
          {socialIcons.map((icon) => {
            return <div className="icon">{icon}</div>;
          })}
        </div>
      </div>
      <div className="row">
        <h3>Our Services</h3>
        <ul className="list">
          {servicesLinks.map((link) => {
            return <li key={link}>{link}</li>;
          })}
        </ul>
      </div>
      <div className="row">
        <h3>Company</h3>
        <ul className="list">
          {companyLinks.map((link) => {
            return <li key={link}>{link}</li>;
          })}
        </ul>
      </div>
      <div className="row">
        <h3>Contact Us</h3>
        <ul>
          {contactInfo.map(({ icon, value }) => {
            return (
              <li>
                <div className="icon">{icon}</div>
                <span>{value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  .row {
    color: #9ea7ad;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .brand {
    }
    h3 {
      color: white;
    }
    .description {
      color: white;
    }
    .social-icons {
      display: flex;
      gap: 1rem;
      .icon {
        border: 1px solid #2d68fd7f;
        padding: 0.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.3rem;
        cursor: pointer;
        svg {
          color: #2d69fd;
          font-size: 1.5rem;
        }
      }
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      li {
        display: flex;
        gap: 2rem;
        display: flex;
        align-items: center;
        .icon {
          border: 1px solid #2d68fd7f;
          padding: 0.2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0.3rem;
          cursor: pointer;
          svg {
            color: #2d69fd;
            font-size: 1.5rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 2rem;
  }
`;
