import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useOnClickOutside } from "../../hooks";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage } from "gatsby-plugin-image";

import Burger from "./Burger";
import OffCanvas from "../OffCanvas/OffCanvas";
import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const MainNav = ({
  headerStyle,
  headerHasBorder,
  headerDarkMode,
  headerLinkColor,
  scrolled,
}) => {
  // determine if offcanvas is open
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const [subMenuHovering1, setSubMenuHovering1] = useState(false);
  const isHoveringSubMenu1 = () => setSubMenuHovering1(true);
  const notHoveringSubMenu1 = () => setSubMenuHovering1(false);

  const [subMenuHovering2, setSubMenuHovering2] = useState(false);
  const isHoveringSubMenu2 = () => setSubMenuHovering2(true);
  const notHoveringSubMenu2 = () => setSubMenuHovering2(false);

  const [subMenuHovering3, setSubMenuHovering3] = useState(false);
  const isHoveringSubMenu3 = () => setSubMenuHovering3(true);
  const notHoveringSubMenu3 = () => setSubMenuHovering3(false);

  // handle click of navigation items
  const clickHandler = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

  // close offcanvas onclick outside
  const node = useRef();
  useOnClickOutside(node, () => setOffcanvasOpen(false));

  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "global/Logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 175, placeholder: NONE)
        }
      }
    }
  `);

  // Define logos based on header style
  let // initialLogo = null,
    //   stickyLogo = null,
    className = null;

  if (headerStyle === "overlap" || headerStyle === "overlap-hero") {
    // initialLogo = data.lightLogo.childImageSharp.gatsbyImageData;
    // stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    className = "absolute";
  } else if (headerDarkMode) {
    // initialLogo = data.lightLogo.childImageSharp.gatsbyImageData;
    // stickyLogo = data.lightLogo.childImageSharp.gatsbyImageData;
  } else {
    // initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    // stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
  }

  if (offcanvasOpen) {
    // initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    // stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
  }
  return (
    <nav
      id="main-navigation"
      className={`py-2 w-full transition duration-300 ease-linear ${
        headerStyle === "overlap" ? "lg:bg-transparent" : ""
      } ${headerHasBorder && ""} ${offcanvasOpen && "bg-white z-10 relative"} ${
        headerDarkMode && ""
      } ${
        scrolled && "!fixed !bg-white top-0 left-0 w-full !shadow-3xl z-50"
      } ${className}`}
      role="navigation"
      aria-label="main-navigation"
      offcanvas-open={offcanvasOpen}
    >
      <div className="container flex justify-between items-center relative z-10">
        <div className="flex flex-auto lg:hidden">
          <a href="tel:619-940-4638">
            <i className="fas fa-phone-alt text-lg text-primary-900"></i>
          </a>
        </div>

        <div className="flex flex-auto lg:flex-none justify-center lg:justify-start">
          <AniLink fade to="/">
            <GatsbyImage
              image={data.logo.childImageSharp.gatsbyImageData}
              alt="AMG Props Logo"
              className="w-[117px] lg:w-[175px]"
            />
          </AniLink>
        </div>

        <div className="flex items-center justify-end lg:justify-start flex-auto">
          <ul
            id="navigation-desktop"
            className="hidden lg:flex lg:flex-row lg:space-x-8 lg:items-center lg:justify-end lg:ml-10"
          >
            <li
              className="relative after:w-0 hover:after:w-full after:absolute after:left-auto hover:after:left-0 after:right-0 hover:after:right-auto after:-bottom-1 after:bg-primary-500 after:h-1 after:transition-all after:duration-300 after:ease-linear"
              role="presentation"
              onMouseEnter={isHoveringSubMenu1}
              onMouseLeave={notHoveringSubMenu1}
            >
              <AniLink
                fade
                to="/property-management-investors/"
                className={`relative text-sm font-medium no-underline pb-8 ${
                  subMenuHovering1 && "text-primary-500"
                } ${scrolled && "text-gray-700 hover:text-gray-700"} ${
                  headerLinkColor === "white"
                    ? "text-white hover:text-white"
                    : "text-gray-700 hover:text-gray-700"
                } ${headerDarkMode && "lg:!text-white"}`}
              >
                Owners
              </AniLink>

              <ul
                className={`absolute top-0 bg-primary-900 shadow-3xl flex flex-col space-y-4 w-auto px-4 py-6 z-10 transition-all duration-300 ease-linear ${
                  subMenuHovering1
                    ? " visible translate-y-12 opacity-100"
                    : "invisible translate-y-20 opacity-0"
                }`}
              >
                <li className="whitespace-nowrap">
                  <AniLink
                    fade
                    to="/resources/"
                    className="relative block font-body font-medium text-white hover:text-primary-500 no-underline"
                  >
                    Resources
                  </AniLink>
                </li>
                <li className="whitespace-nowrap">
                  <a
                    href="https://amgpropertymgmt.appfolio.com/oportal/users/log_in"
                    target="_blank"
                    rel="noreferrer"
                    className="relative block font-body font-medium text-white hover:text-primary-500 no-underline"
                  >
                    Owner Portal
                  </a>
                </li>
              </ul>
            </li>

            <li
              className="relative after:w-0 hover:after:w-full after:absolute after:left-auto hover:after:left-0 after:right-0 hover:after:right-auto after:-bottom-1 after:bg-primary-500 after:h-1 after:transition-all after:duration-300 after:ease-linear"
              role="presentation"
              onMouseEnter={isHoveringSubMenu2}
              onMouseLeave={notHoveringSubMenu2}
            >
              <AniLink
                fade
                to="/tenant-property-management/"
                className={`relative text-sm font-medium no-underline pb-8 ${
                  subMenuHovering2 && "text-primary-500"
                } ${scrolled && "text-gray-700 hover:text-gray-700"} ${
                  headerLinkColor === "white"
                    ? "text-white hover:text-white"
                    : "text-gray-700 hover:text-gray-700"
                } ${headerDarkMode && "lg:!text-white"}`}
              >
                Residents
              </AniLink>
              <ul
                className={`absolute top-0 bg-primary-900 shadow-3xl flex flex-col space-y-4 w-auto px-4 py-6 z-10 transition-all duration-300 ease-linear ${
                  subMenuHovering2
                    ? " visible translate-y-12 opacity-100"
                    : "invisible translate-y-20 opacity-0"
                }`}
              >
                <li className="whitespace-nowrap">
                  <a
                    href="https://amgpropertymgmt.appfolio.com/connect/users/sign_in"
                    target="_blank"
                    rel="noreferrer"
                    className="relative block font-body font-medium text-white hover:text-primary-500 no-underline"
                  >
                    Pay Your Rent
                  </a>
                </li>
                <li className="whitespace-nowrap">
                  <a
                    href="https://app.propertymeld.com/tenant/amg-props/"
                    target="_blank"
                    rel="noreferrer"
                    className="relative block font-body font-medium text-white hover:text-primary-500 no-underline"
                  >
                    Request Maintenance
                  </a>
                </li>
              </ul>
            </li>

            <li className="relative after:w-0 hover:after:w-full after:absolute after:left-auto hover:after:left-0 after:right-0 hover:after:right-auto after:-bottom-1 after:bg-primary-500 after:h-1 after:transition-all after:duration-300 after:ease-linear">
              <AniLink
                fade
                to="/vacancies/"
                className={`relative text-sm font-medium no-underline pb-8 ${
                  scrolled && "text-gray-700 hover:text-gray-700"
                } ${
                  headerLinkColor === "white"
                    ? "text-white hover:text-white"
                    : "text-gray-700 hover:text-gray-700"
                } ${headerDarkMode && "lg:!text-white"}`}
              >
                Vacancies
              </AniLink>
            </li>

            <li className="relative after:w-0 hover:after:w-full after:absolute after:left-auto hover:after:left-0 after:right-0 hover:after:right-auto after:-bottom-1 after:bg-primary-500 after:h-1 after:transition-all after:duration-300 after:ease-linear">
              <AniLink
                fade
                to="/about-us/"
                className={`relative text-sm font-medium no-underline pb-8 ${
                  scrolled && "text-gray-700 hover:text-gray-700"
                } ${
                  headerLinkColor === "white"
                    ? "text-white hover:text-white"
                    : "text-gray-700 hover:text-gray-700"
                } ${headerDarkMode && "lg:!text-white"}`}
              >
                About Us
              </AniLink>
            </li>

            <li className="relative after:w-0 hover:after:w-full after:absolute after:left-auto hover:after:left-0 after:right-0 hover:after:right-auto after:-bottom-1 after:bg-primary-500 after:h-1 after:transition-all after:duration-300 after:ease-linear">
              <AniLink
                fade
                to="/reviews/"
                className={`relative text-sm font-medium no-underline pb-8 ${
                  scrolled && "text-gray-700 hover:text-gray-700"
                } ${
                  headerLinkColor === "white"
                    ? "text-white hover:text-white"
                    : "text-gray-700 hover:text-gray-700"
                } ${headerDarkMode && "lg:!text-white"}`}
              >
                Reviews
              </AniLink>
            </li>
          </ul>

          <div className="lg:hidden" ref={node}>
            {/* Burger */}
            <Burger
              offcanvasOpen={offcanvasOpen}
              setOffcanvasOpen={setOffcanvasOpen}
              headerStyle={headerStyle}
              scrolled={scrolled}
              aria-controls="offcanvas-navigation"
            />

            {/* Mobile Nav */}
            <OffCanvas offcanvasOpen={offcanvasOpen} id="offcanvas-navigation">
              <div>
                <ul id="navigation-mobile" className="mb-20 text-center">
                  <Accordion
                    allowZeroExpanded={true}
                    className="flex flex-col space-y-7"
                  >
                    <li>
                      <AccordionItem uuid={1}>
                        <AccordionItemButton className="flex items-center justify-center focus:outline-none">
                          <p className="font-heading text-xl text-primary-900 hover:text-primary-500 font-semibold no-underline mb-0 transition-colors duration-300 ease-linear">
                            Owners
                          </p>
                        </AccordionItemButton>

                        <AccordionItemPanel className="pt-4">
                          <ul className="flex flex-col space-y-4">
                            <li className="whitespace-nowrap">
                              <AniLink
                                fade
                                to="/property-management-investors/"
                                onKeyDown={clickHandler}
                                onClick={clickHandler}
                                className="relative block font-body font-medium text-gray-600 hover:text-primary-500 no-underline"
                              >
                                Owners
                              </AniLink>
                            </li>
                            <li className="whitespace-nowrap">
                              <AniLink
                                fade
                                to="/resources/"
                                onKeyDown={clickHandler}
                                onClick={clickHandler}
                                className="relative block font-body font-medium text-gray-600 hover:text-primary-500 no-underline"
                              >
                                Resources
                              </AniLink>
                            </li>
                            <li className="whitespace-nowrap">
                              <a
                                href="https://amgpropertymgmt.appfolio.com/oportal/users/log_in"
                                target="_blank"
                                rel="noreferrer"
                                onKeyDown={clickHandler}
                                onClick={clickHandler}
                                className="relative block font-body font-medium text-gray-600 hover:text-primary-500 no-underline"
                              >
                                Owner Portal
                              </a>
                            </li>
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </li>

                    <li>
                      <AccordionItem uuid={2}>
                        <AccordionItemButton className="flex items-center justify-center focus:outline-none">
                          <p className="font-heading text-xl text-primary-900 hover:text-primary-500 font-semibold no-underline mb-0 transition-colors duration-300 ease-linear">
                            Residents
                          </p>
                        </AccordionItemButton>

                        <AccordionItemPanel className="pt-4">
                          <ul className="flex flex-col space-y-4">
                            <li className="whitespace-nowrap">
                              <AniLink
                                fade
                                to="/tenant-property-management/"
                                onKeyDown={clickHandler}
                                onClick={clickHandler}
                                className="relative block font-body font-medium text-gray-600 hover:text-primary-500 no-underline"
                              >
                                Residents
                              </AniLink>
                            </li>
                            <li className="whitespace-nowrap">
                              <a
                                href="https://amgpropertymgmt.appfolio.com/connect/users/sign_in"
                                target="_blank"
                                rel="noreferrer"
                                onKeyDown={clickHandler}
                                onClick={clickHandler}
                                className="relative block font-body font-medium text-gray-600 hover:text-primary-500 no-underline"
                              >
                                Pay Your Rent
                              </a>
                            </li>
                            <li className="whitespace-nowrap">
                              <a
                                href="https://app.propertymeld.com/tenant/amg-props/"
                                target="_blank"
                                rel="noreferrer"
                                onKeyDown={clickHandler}
                                onClick={clickHandler}
                                className="relative block font-body font-medium text-gray-600 hover:text-primary-500 no-underline"
                              >
                                Request Maintenance
                              </a>
                            </li>
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </li>

                    <li>
                      <AniLink
                        fade
                        to="/vacancies/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                        className="font-heading text-xl text-primary-900 hover:text-primary-500 font-semibold no-underline"
                      >
                        Vacancies
                      </AniLink>
                    </li>

                    <li>
                      <AniLink
                        fade
                        to="/about-us/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                        className="font-heading text-xl text-primary-900 hover:text-primary-500 font-semibold no-underline"
                      >
                        About
                      </AniLink>
                    </li>

                    <li>
                      <AniLink
                        fade
                        to="/reviews/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                        className="font-heading text-xl text-primary-900 hover:text-primary-500 font-semibold no-underline"
                      >
                        Reviews
                      </AniLink>
                    </li>
                  </Accordion>
                </ul>

                <div className="grid gap-y-4 max-w-sm mx-auto">
                  <ButtonGhost
                    href="tel:619-940-4638"
                    text="(619) 940-4638"
                    className="w-full"
                  />

                  <ButtonSolid
                    modal="modal-contact"
                    text="Contact Us"
                    className="w-full"
                  />
                </div>
              </div>
            </OffCanvas>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-end space-x-6">
          <ul className="flex lg:flex-row lg:space-x-8">
            <li
              className="relative"
              role="presentation"
              onMouseEnter={isHoveringSubMenu3}
              onMouseLeave={notHoveringSubMenu3}
            >
              <AniLink
                fade
                to="#"
                className={`relative text-sm font-medium no-underline pb-8 ${
                  subMenuHovering3 && "text-primary-500"
                } ${scrolled && "text-gray-700 hover:text-gray-700"} ${
                  headerLinkColor === "white"
                    ? "text-white hover:text-white"
                    : "text-gray-700 hover:text-gray-700"
                } ${headerDarkMode && "lg:!text-white"}`}
              >
                Sign In <i className="far fa-chevron-down"></i>
              </AniLink>

              <ul
                className={`absolute top-0 bg-primary-900 shadow-3xl flex flex-col space-y-4 w-auto px-4 py-6 z-10 transition-all duration-300 ease-linear ${
                  subMenuHovering3
                    ? " visible translate-y-12 opacity-100"
                    : "invisible translate-y-20 opacity-0"
                }`}
              >
                <li className="whitespace-nowrap">
                  <a
                    href="https://amgpropertymgmt.appfolio.com/oportal/users/log_in"
                    target="_blank"
                    rel="noreferrer"
                    className="relative block font-body font-medium text-white hover:text-primary-500 no-underline"
                  >
                    Owner Portal
                  </a>
                </li>
                <li className="whitespace-nowrap">
                  <a
                    href="https://amgpropertymgmt.appfolio.com/connect/users/sign_in"
                    target="_blank"
                    rel="noreferrer"
                    className="relative block font-body font-medium text-white hover:text-primary-500 no-underline"
                  >
                    Tenant Portal
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ButtonSolid
            modal="modal-contact"
            text="Contact"
            className="min-w-0"
          />
        </div>
      </div>
    </nav>
  );
};
export default MainNav;
