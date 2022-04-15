import React from "react";
import { FaOpencart } from "react-icons/fa";
import Logo from "assets/images/logo/logo.png";
import AppOffer from "assets/images/logo/app-offer.png";

export const Header = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between items-center pt-2.5">
        <div>
          <img className="w-32" src={Logo} alt="Daraz Logo" />
        </div>
        <ul className="flex items-center">
          <li className="inline-block mx-2">
            <input
              className="search-input"
              type="text"
              placeholder="Search in Daraz"
            />
            <button className="btn-primary">Search</button>
          </li>
          <li className="inline-block mx-2">
            <FaOpencart className="text-2xl" title="Cart" />
          </li>
        </ul>
        <div>
          <img className="w-48" src={AppOffer} alt="App Offer Ads" />
        </div>
      </nav>
    </div>
  );
};
