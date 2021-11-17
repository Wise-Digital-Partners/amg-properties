import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const ResidentHub = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      logo1: file(
        relativePath: { eq: "repeating/Logos/equal-housing-min-1 1.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 67)
        }
      }
      logo2: file(relativePath: { eq: "repeating/Logos/CAR-min 1.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 158)
        }
      }
      logo3: file(
        relativePath: { eq: "repeating/Logos/Realtor-Trust-Image-min 1.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 54)
        }
      }
      logo4: file(relativePath: { eq: "repeating/Logos/SDAR-Logo-min 1.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 140)
        }
      }
      logo5: file(
        relativePath: { eq: "repeating/Logos/handicap-logo-md-copy-min 1.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 65)
        }
      }
      logo6: file(
        relativePath: { eq: "repeating/Logos/NARPM-Trust-Symbol-min 1.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 121)
        }
      }
    }
  `);

  return (
    <section className={`${className || "mb-20 md:mb-30"}`}>
      <div className="container">
        <div className="grid md:flex grid-cols-3 text-center md:justify-between gap-y-8 md:gap-x-10">
          <div>
            <GatsbyImage image={data.logo1.childImageSharp.gatsbyImageData} />
          </div>
          <div>
            <GatsbyImage image={data.logo2.childImageSharp.gatsbyImageData} />
          </div>
          <div>
            <GatsbyImage image={data.logo3.childImageSharp.gatsbyImageData} />
          </div>
          <div>
            <GatsbyImage image={data.logo4.childImageSharp.gatsbyImageData} />
          </div>
          <div>
            <GatsbyImage image={data.logo5.childImageSharp.gatsbyImageData} />
          </div>
          <div>
            <GatsbyImage image={data.logo6.childImageSharp.gatsbyImageData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentHub;
