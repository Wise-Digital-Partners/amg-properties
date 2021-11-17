import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Background from "../Background/Background";
import Slider from "../Slider/SliderTestimonials";

const Testimonial = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      google: file(relativePath: { eq: "repeating/Testimonials/Google.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 62)
        }
      }
      unnamed: file(
        relativePath: { eq: "repeating/Testimonials/unnamed.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 64)
        }
      }
      unnamed1: file(
        relativePath: { eq: "repeating/Testimonials/unnamed-1.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 64)
        }
      }
      unnamed2: file(
        relativePath: { eq: "repeating/Testimonials/unnamed 2.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 64)
        }
      }
      background: file(
        relativePath: { eq: "repeating/Testimonials/Testimonials.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  const testimonials = [
    {
      quote:
        "I live out of state and have had AMG Props take care of my property since 2012. They have done a phenomenal job of handling any issues related to the property and tenants...in the last 7 years my property has never sat vacant for more than 2 months. They are on top of of vacating tenants and immediately get the property reading for the next clients.",
      name: "Jennifer",
      title: "Property Investor",
      headshot: data.unnamed2.childImageSharp.gatsbyImageData,
      platform: data.google.childImageSharp.gatsbyImageData,
    },
    {
      quote:
        "Our Family is fortunate enough to own a modest income property near San Diego. Unfortunately its hours away by car making it very difficult to handle the inevitable maintenance issues that come up not, to mention the occasional but dreaded tenant turnover.  They handle it all! If a repair is needed they act quickly,  they are good communicators and work well with the tenants, their monthly reports are easy to understand and our tax person loves them.",
      name: "Jamie Wainer",
      title: "Property Investor",
      headshot: data.unnamed1.childImageSharp.gatsbyImageData,
      platform: data.google.childImageSharp.gatsbyImageData,
    },
    {
      quote:
        "I have been renting from AMG Props for a few years - the staff is friendly and helpful, and everyone can assist you, so if your main contact is away, you will still get great help. They have an amazingly easy to use Tenant Portal, you can pay rent electronically, as well as submit any maintenance requests. Quick to respond as needed, but our property is well maintained by them so we hardly need to contact them for any fixes. Happy to be renting from them!",
      name: "Rachel Tiedemann",
      title: "Resident",
      headshot: data.unnamed.childImageSharp.gatsbyImageData,
      platform: data.google.childImageSharp.gatsbyImageData,
    },
  ];

  const HeadingTag = headingLevel || "h2";

  return (
    <>
      <Background
        className={`overflow-x-hidden ${className || "mb-20 md:mb-30"}`}
        padding="md:pt-24 md:pb-40"
        backgroundImages={data.background.childImageSharp.gatsbyImageData}
        mobileRemoveBackground={true}
      >
        <div className="absolute w-full md:hidden -mx-4 md:mx-0">
          <GatsbyImage
            image={data.background.childImageSharp.gatsbyImageData}
            className="min-h-[375px]"
          />
        </div>
        <header className="text-center pt-20 md:pt-0 pb-14 md:pb-0 md:mb-20 relative z-10">
          <HeadingTag className="text-white">
            Why Investors & Residents Love AMG Props
          </HeadingTag>
        </header>
        <Slider slides={testimonials}></Slider>
      </Background>
    </>
  );
};

export default Testimonial;
