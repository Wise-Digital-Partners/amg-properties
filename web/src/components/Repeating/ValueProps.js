import React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";

const ValueProps = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      icon1: file(
        relativePath: { eq: "repeating/Why Us/Tailored Services.svg" }
      ) {
        publicURL
      }
      icon2: file(
        relativePath: { eq: "repeating/Why Us/Locally Owned _ Operated.svg" }
      ) {
        publicURL
      }
      icon3: file(relativePath: { eq: "repeating/Why Us/We Own Too.svg" }) {
        publicURL
      }
    }
  `);

  const content = [
    {
      icon: data.icon1.publicURL,
      heading: "Tailored Services",
      text: "You have options with AMG Props. We provide custom plans for property management services in San Diego.",
    },
    {
      icon: data.icon2.publicURL,
      heading: "Locally Owned & Operated",
      text: "San Diego's our home, and we've managed over 500 properties throughout our local communities.",
    },
    {
      icon: data.icon3.publicURL,
      heading: "We Own Too",
      text: "We're investors just like you. And as landlords, we care for your property the same way we want ours looked after—professionally and on point.",
    },
  ];

  return (
    <section className={`${className || "mb-20 md:mb-24"}`}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-10 lg:gap-x-20">
          {content.map((content, i) => {
            return (
              <div key={i}>
                <img
                  src={content.icon}
                  alt={content.heading}
                  className="mb-2"
                />
                <div>
                  <h3 className="heading-six mb-3">{content.heading}</h3>
                  <p className="mb-0">{content.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
