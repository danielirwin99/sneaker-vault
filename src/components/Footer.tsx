import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center h-[45vh] bg-[#111]">
      <div className="flex flex-col justify-center items-center w-[80vw]">
        <figure className="h-12 w-12">
          <img
            className="w-full"
            src="https://cdn.logojoy.com/wp-content/uploads/2018/12/14162408/ic_bc.svg"
            alt="LOGO"
          />
        </figure>
        <div className="flex items-center between mt-4 text-center">
          <div>
            <h2 className="footerHeader">Products</h2>
            <h2 className="footerLink">Dunks</h2>
            <h2 className="footerLink">Jordans</h2>
            <h2 className="footerLink">Yeezy</h2>
            <h2 className="footerLink">Air Max</h2>
          </div>
          <div>
            <h2 className="footerHeader">Categories</h2>
            <h2 className="footerLink">Womens</h2>
            <h2 className="footerLink">Mens</h2>
            <h2 className="footerLink">Youth</h2>
            <h2 className="footerLink">Infant</h2>
          </div>
          <div>
            <h2 className="footerHeader">Company</h2>
            <h2 className="footerLink">About</h2>
            <h2 className="footerLink">Contact Us</h2>
            <h2 className="footerLink">T's & C's</h2>
            <h2 className="footerLink">Shipping Policy</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="footerHeader">Social</h2>
            <div className="footerSocial">
              <BsFacebook />
            </div>
            <div className="footerSocial">
              <BsInstagram />
            </div>
            <div className="footerSocial">
              <BsTwitter />
            </div>
            <div className="footerSocial">
              <BsYoutube />
            </div>
          </div>
        </div>
        <h2 className="text-white mt-4">
          Copyright Sneaker Vault Pty Ltd @ 2023
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
