import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Hero from "../components/Hero/HeroFullWidth";
import ResidentHub from "../components/Repeating/ResidentHub";
import Testimonials from "../components/Repeating/Testimonials";
import ValueProps from "../components/Repeating/ValueProps";
import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
import LogoCloud from "../components/Repeating/LogoCloud";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonWithIcon from "../components/Button/ButtonWithIcon";

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
        title="Pacific Beach Property Management | AMG Props"
        description="Partner with AMG Props for premier property management in Pacific Beach. We'll handle your advertising, leasing, rent collection, accounting, and maintenance."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
      <Hero
        backgroundImages={heroImages}
        backgroundPosition="50% 50%"
        textMaxWidth="max-w-[560px]"
        padding="py-36 md:py-24"
        className="mb-16 md:mb-30"
      >
        <p className="font-heading text-mobile-7xl md:text-7xl font-bold text-white mb-5">
          Property management made easy
          <span className="text-primary-500">.</span>
        </p>
        <p className="text-white text-xl mb-8">
          Stress less. Increase your revenue. Your Pacific Beach property and
          residents are in good hands.
        </p>
        <ButtonSolid
          modal="modal-rental-analysis"
          text="Free Rental Analysis"
        />
      </Hero>
      <section className="mb-20 md:mb-30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <GatsbyImage image={data.intro.childImageSharp.gatsbyImageData} />
            </div>
            <div className="order-1 md:order-2">
              <h1>Pacific Beach Property Management Company</h1>
              <p>
                AMG Props can manage every aspect of your Pacific Beach
                investment property, from advertising to leasing, rent
                collections, accounting, and maintenance. As your San Diego-area
                landlord, we make you and your property a priority with a
                service plan crafted to fit your needs.
              </p>
              <ButtonWithIcon href="/about-us/" text="Learn More" />
            </div>
          </div>
        </div>
      </section>

      <ValueProps />

      <section className="mb-20 md:mb-30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div>
              <GatsbyImage
                image={data.ownersHome.childImageSharp.gatsbyImageData}
              />
            </div>
            <div>
              <h2>Pacific Beach Property Management Services</h2>
              <p>
                When you partner with AMG Props, you get a professional team
                with the experience, knowledge, and organization to efficiently
                manage your Pacific Beach investment rental property.
              </p>
              <ButtonWithIcon
                href="/tenant-property-management/"
                text="Learn More"
              />
            </div>
          </div>
        </div>
      </section>

      <ResidentHub />
      <Testimonials />
      <RecentBlogPosts />

      <section className="mb-20 md:mb-30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div>
              <GatsbyImage image={data.city.childImageSharp.gatsbyImageData} />
            </div>
            <div>
              <h2>Why Pacific Beach Is A Great Place To Live</h2>
              <p>
                From sun and surf to trendy bars and restaurants, eclectic
                boutiques, and casual cafes, Pacific Beach (known by the locals
                as “P.B.”) offers its residents a unique lifestyle. Day or
                night, you’re never at a loss for something to do, making
                Pacific Beach an attractive place to live and enjoy life. If you
                own a rental home in this vibrant community, you can trust AMG
                Props to find you the best residents, plus give you the best
                return on your investment.
              </p>
              <ButtonSolid
                modal="modal-rental-analysis"
                text="Free Rental Analysis"
              />
            </div>
          </div>
        </div>
      </section>

      <LogoCloud />
      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Global.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Global.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(relativePath: { eq: "1.0 Homepage/1.0-hero-home.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    heroMobile: file(
      relativePath: { eq: "1.0 Homepage/1.0-hero-home-mobile.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    intro: file(relativePath: { eq: "1.0 Homepage/2.0-intro-home.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    ownersHome: file(relativePath: { eq: "1.0 Homepage/3.0-owners-home.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    city: file(relativePath: { eq: "5.0 Cities/Pacific Beach.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
