import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import ButtonWithIcon from "../Button/ButtonWithIcon";

const ResidentHub = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      renterResources: file(
        relativePath: { eq: "1.0 Homepage/4.0-renter-resources.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 746)
        }
      }
      residentPortal: file(
        relativePath: { eq: "1.0 Homepage/4.1-resident-portal.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 746)
        }
      }
      whatsForRent: file(
        relativePath: { eq: "1.0 Homepage/4.2-what_s-for-rent.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 746)
        }
      }
    }
  `);

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-20 md:mb-30"}`}>
      <div className="container">
        <header className="mb-12 max-w-[720px]">
          <HeadingTag>Resident Hub</HeadingTag>
          <p>
            Log in to your resident portal, view homes that are available to
            rent, and get access to helpful information.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-10">
          <div>
            <AniLink
              fade
              to="/resources/"
              className="group text-gray-600 no-underline"
            >
              <div className="overflow-hidden mb-5">
                <GatsbyImage
                  image={data.renterResources.childImageSharp.gatsbyImageData}
                  className="w-full transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </div>
              <h3 className="heading-six">Renter Resources</h3>
              <p className="mb-4">
                Find out about our application process and get answers to
                frequently asked questions.
              </p>
              <ButtonWithIcon href="/resources/" text="Learn More" />
            </AniLink>
          </div>

          <div>
            <AniLink
              fade
              to="/vacancies/"
              className="group text-gray-600 no-underline"
            >
              <div className="overflow-hidden mb-5">
                <GatsbyImage
                  image={data.whatsForRent.childImageSharp.gatsbyImageData}
                  className="w-full transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </div>
              <h3 className="heading-six">What's For Rent</h3>
              <p className="mb-4">
                Looking for a great place to live? Check out our current
                vacancies.
              </p>
              <ButtonWithIcon href="/vacancies/" text="Learn More" />
            </AniLink>
          </div>

          <div>
            <a
              href="https://amgpropertymgmt.appfolio.com/connect/users/sign_in"
              target="_blank"
              rel="noreferrer"
              className="group text-gray-600 no-underline"
            >
              <div className="overflow-hidden mb-5">
                <GatsbyImage
                  image={data.residentPortal.childImageSharp.gatsbyImageData}
                  className="w-full transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </div>
              <h3 className="heading-six">Resident Portal</h3>
              <p className="mb-4">
                Pay your rent, view your account information, or submit a
                maintenance request.
              </p>
              <ButtonWithIcon
                href="https://amgpropertymgmt.appfolio.com/connect/users/sign_in"
                outboundLink={true}
                text="Learn More"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentHub;
