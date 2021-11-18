import React from "react";

import creditCard from "../../images/global/Credit Card.svg";
import tools from "../../images/global/Tools.svg";

const UtilityNav = () => {
  return (
    <div id="utlity-navigation" className="bg-primary-900 py-1.5">
      <div className="container">
        <div className="flex justify-between items-center">
          <a
            href="tel:619-940-4638"
            className="font-medium text-white text-sm hidden md:flex items-center no-underline"
          >
            <i className="fas fa-phone-alt text-primary-500 text-lg mr-1.5"></i>
            <span>(619) 940-4638</span>
          </a>
          <div className="flex justify-around md:justify-end items-center space-x-8 w-full md:w-auto">
            <a
              href="https://amgpropertymgmt.appfolio.com/connect/users/sign_in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-white font-medium text-sm no-underline"
            >
              <img src={creditCard} alt="Credit card" className="mr-1.5" /> Pay
              Rent
            </a>

            <a
              href="https://app.propertymeld.com/tenant/amg-props/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-white font-medium text-sm no-underline"
            >
              <img src={tools} alt="Tools" className="mr-1.5" /> Maintenance
              Request
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UtilityNav;
