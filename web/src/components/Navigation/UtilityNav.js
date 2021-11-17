import React from "react";

const UtilityNav = () => {
  return (
    <div id="utlity-navigation" className="bg-primary-900 py-1.5">
      <div className="container">
        <div className="flex justify-between items-center">
          <a
            href="tel:619-940-4638"
            className="font-medium text-white text-sm hidden md:flex items-center"
          >
            <i className="fas fa-phone-alt text-primary-500 text-lg mr-1.5"></i>
            <span>(619) 940-4638</span>
          </a>
          <div className="flex justify-end items-center"></div>
        </div>
      </div>
    </div>
  );
};
export default UtilityNav;
