import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage } from "gatsby-plugin-image";

import nestLogo from "../../images/global/Nest Logo.svg";

const Footer = ({ hideFooter }) => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  const citiesClickHandler = () => {
    setCityDropdownOpen(!cityDropdownOpen);
  };

  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "global/Logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 175)
        }
      }
    }
  `);

  const navigation = {
    cities: [
      {
        name: "Mission Hills",
        href: "/mission-hills-property-management/",
      },
      {
        name: "North Park",
        href: "/north-park-property-management/",
      },
      {
        name: "University Heights",
        href: "/university-heights-property-management/",
      },
      {
        name: "South Park",
        href: "/south-park-property-management/",
      },
      {
        name: "Normal Heights",
        href: "/normal-heights-property-management/",
      },
      {
        name: "Hillcrest",
        href: "/hillcrest-property-management/",
      },
    ],
  };

  return (
    <footer
      className={`pt-20 md:pt-30 pb-5 md:pb-6 text-center md:text-left ${
        hideFooter && "hidden"
      }`}
    >
      <div className="container">
        <div className="grid md:grid-cols-12 md:justify-between space-y-8 md:space-y-0 md:space-x-8 mb-10 md:mb-24">
          <div className="md:col-start-1 md:col-span-3">
            <AniLink fade to="/">
              <GatsbyImage
                image={data.logo.childImageSharp.gatsbyImageData}
                alt="AMG Props Logo"
                className="mb-6 mx-auto md:mx-0"
              />
            </AniLink>

            <div className="font-display text-primary-900 text-sm tracking-wide font-bold uppercase mb-6">
              Corp BRE # 01960034
            </div>

            <div className="flex md:hidden items-center justify-center space-x-6">
              <a
                href="https://www.facebook.com/amgprops/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-900"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="https://www.yelp.com/biz/amg-props-san-diego-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-900"
              >
                <i className="fab fa-yelp text-2xl"></i>
              </a>
              <a
                href="https://twitter.com/amgprops"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-900"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>

          <div className="md:col-end-13 md:col-span-9">
            <div className="grid md:flex md:justify-end md:gap-x-10 lg:gap-x-24 gap-y-10 md:gap-y-0">
              <div>
                <div className="font-body font-medium text-primary-900 mb-5">
                  For Owners
                </div>
                <ul className="flex flex-col space-y-1.5">
                  <li>
                    <AniLink
                      fade
                      to="/property-management-investors/"
                      className="text-sm text-primary-900/70 hover:text-primary-900 no-underline relative before:w-0 hover:before:w-full before:absolute before:left-auto hover:before:left-0 before:right-0 hover:before:right-auto before:bottom-0 before:bg-primary-900 before:h-px before:transition-all before:duration-300 before:ease-linear"
                    >
                      Owners
                    </AniLink>
                  </li>
                  <li>
                    <AniLink
                      fade
                      to="/resources/"
                      className="text-sm text-primary-900/70 hover:text-primary-900 no-underline relative before:w-0 hover:before:w-full before:absolute before:left-auto hover:before:left-0 before:right-0 hover:before:right-auto before:bottom-0 before:bg-primary-900 before:h-px before:transition-all before:duration-300 before:ease-linear"
                    >
                      Owner Resources
                    </AniLink>
                  </li>
                  <li>
                    <a
                      href="https://amgpropertymgmt.appfolio.com/oportal/users/log_in"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-primary-900/70 hover:text-primary-900 no-underline relative before:w-0 hover:before:w-full before:absolute before:left-auto hover:before:left-0 before:right-0 hover:before:right-auto before:bottom-0 before:bg-primary-900 before:h-px before:transition-all before:duration-300 before:ease-linear"
                    >
                      Owner Portal
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <div className="font-body font-medium text-primary-900 mb-5">
                  For Tenants
                </div>
                <ul className="flex flex-col space-y-1.5">
                  <li>
                    <AniLink
                      fade
                      to="/tenant-property-management/"
                      className="text-sm text-primary-900/70 hover:text-primary-900 no-underline relative before:w-0 hover:before:w-full before:absolute before:left-auto hover:before:left-0 before:right-0 hover:before:right-auto before:bottom-0 before:bg-primary-900 before:h-px before:transition-all before:duration-300 before:ease-linear"
                    >
                      Tenants
                    </AniLink>
                  </li>
                  <li>
                    <AniLink
                      fade
                      to="/vacancies/"
                      className="text-sm text-primary-900/70 hover:text-primary-900 no-underline relative before:w-0 hover:before:w-full before:absolute before:left-auto hover:before:left-0 before:right-0 hover:before:right-auto before:bottom-0 before:bg-primary-900 before:h-px before:transition-all before:duration-300 before:ease-linear"
                    >
                      Vacancies
                    </AniLink>
                  </li>
                  <li>
                    <a
                      href="https://amgpropertymgmt.appfolio.com/connect/users/sign_in"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-primary-900/70 hover:text-primary-900 no-underline relative before:w-0 hover:before:w-full before:absolute before:left-auto hover:before:left-0 before:right-0 hover:before:right-auto before:bottom-0 before:bg-primary-900 before:h-px before:transition-all before:duration-300 before:ease-linear"
                    >
                      Tenant Portal
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://app.propertymeld.com/tenant/amg-props/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-primary-900/70 hover:text-primary-900 no-underline relative before:w-0 hover:before:w-full before:absolute before:left-auto hover:before:left-0 before:right-0 hover:before:right-auto before:bottom-0 before:bg-primary-900 before:h-px before:transition-all before:duration-300 before:ease-linear"
                    >
                      Maintenance Request
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <div className="font-body font-medium text-primary-900 mb-5">
                  Company
                </div>

                <ul className="flex flex-col space-y-1.5">
                  <li>
                    <AniLink
                      fade
                      to="/about-us/"
                      className="text-sm text-primary-900/70 hover:text-primary-900 no-underline relative before:w-0 hover:before:w-full before:absolute before:left-auto hover:before:left-0 before:right-0 hover:before:right-auto before:bottom-0 before:bg-primary-900 before:h-px before:transition-all before:duration-300 before:ease-linear"
                    >
                      About Us
                    </AniLink>
                  </li>
                  <li>
                    <AniLink
                      fade
                      to="/reviews/"
                      className="text-sm text-primary-900/70 hover:text-primary-900 no-underline relative before:w-0 hover:before:w-full before:absolute before:left-auto hover:before:left-0 before:right-0 hover:before:right-auto before:bottom-0 before:bg-primary-900 before:h-px before:transition-all before:duration-300 before:ease-linear"
                    >
                      Reviews
                    </AniLink>
                  </li>
                  <li>
                    <AniLink
                      fade
                      to="/blog/"
                      className="text-sm text-primary-900/70 hover:text-primary-900 no-underline relative before:w-0 hover:before:w-full before:absolute before:left-auto hover:before:left-0 before:right-0 hover:before:right-auto before:bottom-0 before:bg-primary-900 before:h-px before:transition-all before:duration-300 before:ease-linear"
                    >
                      Blog
                    </AniLink>
                  </li>
                </ul>
              </div>

              <div>
                <div className="font-body font-medium text-primary-900 mb-5">
                  Contact
                </div>

                <ul className="flex flex-col space-y-1.5">
                  <li>
                    <a
                      href="tel:619-940-4638"
                      className="text-sm text-primary-900/70 hover:text-primary-900 no-underline relative before:w-0 hover:before:w-full before:absolute before:left-auto hover:before:left-0 before:right-0 hover:before:right-auto before:bottom-0 before:bg-primary-900 before:h-px before:transition-all before:duration-300 before:ease-linear"
                    >
                      (619) 940-4638
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@amgprops.com"
                      className="text-sm text-primary-900/70 hover:text-primary-900 no-underline relative before:w-0 hover:before:w-full before:absolute before:left-auto hover:before:left-0 before:right-0 hover:before:right-auto before:bottom-0 before:bg-primary-900 before:h-px before:transition-all before:duration-300 before:ease-linear"
                    >
                      info@amgprops.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-items-center md:justify-between md:items-center">
          <div className="md:flex md:items-center">
            <ul className="flex items-center flex-wrap lg:space-x-4 justify-center md:justify-start">
              <li className="text-sm text-primary-900/70 order-2 md:order-1">
                © {getYear()} AMG Props
              </li>

              <li className="text-sm order-3 md:order-2 flex items-center">
                <div className="lg:hidden text-primary-900/70 mx-1.5">|</div>
                <AniLink
                  fade
                  to="/privacy-policy/"
                  className="text-primary-900/70 hover:text-primary-900 no-underline relative before:w-0 hover:before:w-full before:absolute before:left-auto hover:before:left-0 before:right-0 hover:before:right-auto before:bottom-0 before:bg-primary-900 before:h-px before:transition-all before:duration-300 before:ease-linear"
                >
                  Privacy Policy
                </AniLink>
              </li>

              <li className="text-sm w-full md:w-auto mb-3.5 md:mb-0 order-1 md:order-3">
                <button
                  className="text-primary-900/70 hover:text-primary-900 no-underline relative before:w-0 hover:before:w-full before:absolute before:left-auto hover:before:left-0 before:right-0 hover:before:right-auto before:bottom-0 before:bg-primary-900 before:h-px before:transition-all before:duration-300 before:ease-linear"
                  onKeyDown={citiesClickHandler}
                  onClick={citiesClickHandler}
                >
                  <span className="flex items-center justify-between">
                    Cities
                    <i
                      className={`far fa-chevron-down ml-2 transition-all duration-300 ease-linear transform ${
                        cityDropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                    ></i>
                  </span>
                  <ul
                    className={`bg-primary-900 text-left absolute bottom-0 right-0 pt-5 px-4 pb-4 flex flex-col space-y-1.5 max-h-28 overflow-y-scroll transform transition-all duration-300 ease-linear ${
                      cityDropdownOpen
                        ? "opacity-100 -translate-y-10 visible"
                        : "opacity-0 -translate-y-4 invisible"
                    }`}
                  >
                    {navigation.cities.map((item) => (
                      <li
                        className="text-xs whitespace-nowrap pb-1.5"
                        key={item.name}
                      >
                        <AniLink
                          fade
                          to={item.href}
                          className="font-body font-medium text-white hover:text-primary-500 no-underline"
                        >
                          {item.name}
                        </AniLink>
                      </li>
                    ))}
                  </ul>
                </button>
              </li>

              <li className="text-sm w-full md:w-auto mt-3.5 md:mt-0 order-3 md:order-4">
                <a
                  className="group text-primary-900/70 hover:text-primary-900 no-underline relative before:w-0 hover:before:w-full before:absolute before:left-auto hover:before:left-0 before:right-0 hover:before:right-auto before:bottom-0 before:bg-primary-900 before:h-px before:transition-all before:duration-300 before:ease-linear flex items-center justify-center md:justify-start space-x-1"
                  href="https://www.wisedigitalpartners.com/nest-by-wise/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Powered by</span>{" "}
                  <img
                    src={nestLogo}
                    alt="NEST logo"
                    className="opacity-70 group-hover:opacity-100 transition-all duration-300 ease-linear"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <a
                href="https://www.facebook.com/amgprops/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-900"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="https://www.yelp.com/biz/amg-props-san-diego-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-900"
              >
                <i className="fab fa-yelp text-2xl"></i>
              </a>
              <a
                href="https://twitter.com/amgprops"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-900"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
