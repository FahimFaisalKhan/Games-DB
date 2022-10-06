import React from "react";
import { Footer } from "react-daisyui";
import { Link } from "react-router-dom";
import apexLogo from "../Static/apexLogo.svg";
const FooterScreen = () => {
  return (
    <div>
      <Footer className="p-10 bg-neutral text-neutral-content">
        <div>
          <img src={apexLogo} className="w-32 h-40" alt="" />
          <p>All rights Reserved @Fahim Faisal Khan</p>
        </div>

        <div>
          <Footer.Title>Services</Footer.Title>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <Footer.Title>Company</Footer.Title>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <Footer.Title>Legal</Footer.Title>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </Footer>
    </div>
  );
};

export default FooterScreen;
