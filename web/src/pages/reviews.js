import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ButtonSolid from "../components/Button/ButtonSolid";
import Hero from "../components/Hero/HeroFullWidth";
import ReviewsGrid from "../components/Reviews/ReviewsGrid";
import CallToAction from "../components/Repeating/CTA";

const Page = ({ data }) => {
  const heroImages = [
    getImage(data.heroDesktop.childImageSharp.gatsbyImageData),
    {
      ...getImage(data.heroMobile.childImageSharp.gatsbyImageData),
      media: `(max-width: 767px)`,
    },
  ];
  return (
    <Layout>
      <SearchEngineOptimization
        title="AMG Props Reviews | San Diego Property Management Company"
        description="See why rental property investors and residents love AMG Props, San Diego's premier full-service property management company."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <Hero
        backgroundImages={heroImages}
        backgroundPosition="50% 50%"
        textMaxWidth="md:max-w-[640px]"
        padding="py-16 md:py-36"
      >
        <h1 className="text-white">Why We Do What We Do</h1>
        <p className="text-white">
          We love helping people find a great place to live, and partnering with
          owners to take good care of their investment. Share your experience
          with AMG Props so we can hear how we're doing!
        </p>

        <ButtonSolid href="https://www.google.com/search?q=amgprops&oq=amgprops&aqs=chrome..69i57j46i10i175i199i512.2830j0j7&sourceid=chrome&ie=UTF-8#lrd=0x80deab50ef7b55ed:0xc1dfa73fdff31d5b,3,,,," target="_blank" text="Leave a Review" />
      </Hero>

      <section className="pt-16 md:pt-24 mb-20 md:mb-30">
        <div className="container">
          <ReviewsGrid gridLayout="masonry" />
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/FB-Reviews.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Twitter-Reviews.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: { eq: "6.0 Reviews/1.0-hero-reviews-desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    heroMobile: file(
      relativePath: { eq: "6.0 Reviews/1.0-hero-reviews-mobile.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default Page;
