import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import ButtonSolid from "../Button/ButtonSolid";

const ResidentHub = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      appProcess: file(
        relativePath: { eq: "repeating/Application Process/app process.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 560)
        }
      }
    }
  `);

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-20 md:mb-30"}`}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
          <div className="order-2 md:order-1">
            <HeadingTag>Submit Your Rental Application</HeadingTag>
            <p>
              If you've found a home you'd love to rent, the first step is to
              fill out an application. Before you begin, make sure you have
              everything on this checklist ready:
            </p>
            <ul className="styled-list-checkmark mb-6">
              <li>$45 for the application fee</li>
              <li>Proof of your income, such as pay stubs</li>
              <li>Contact information for references</li>
              <li>Your rental history and landlord information</li>
              <li>A list of co-applicants/occupants</li>
            </ul>
            <ButtonSolid
              href="https://amgpropertymgmt.appfolio.com/listings/rental_applications/new?listable_uid=febb6c07-6252-4ce0-9dfa-e2c810cbf3c8&source=Website"
              outboundLink={true}
              text="Apply Now"
            />
          </div>
          <div className="order-1 md:order-2">
            <GatsbyImage
              image={data.appProcess.childImageSharp.gatsbyImageData}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentHub;
