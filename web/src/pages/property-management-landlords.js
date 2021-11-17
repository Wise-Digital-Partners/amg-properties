import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
import ValueProps from "../components/Repeating/ValueProps";
import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
import LogoCloud from "../components/Repeating/LogoCloud";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Property Management for Landlords | AMG Props"
        description="Work with the best in the business, and rest easy knowing we've got this. AMG Props is your #1 choice for property management for landlords in San Diego."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
      <section className="relative mb-20 md:mb-14 pt-4 md:pt-6 md:min-h-[565px] lg:min-h-[640px]">
        <div className="bg-primary-900/10 absolute right-0 top-0 md:top-[-64px] h-[277px] md:h-[629px] lg:h-[704px] max-w-[1000px] w-full md:w-[37vw] z-30"></div>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>Premier Property Management Services For Investors</h1>
              <p>
                We're a service-oriented, motivated team with the resources,
                experience, and knowledge to serve as your landlord and manage
                your investment. Whether you're looking for full-service
                property management or simply need help with leasing, AMG Props
                is your #1 choice.
              </p>
              <ButtonSolid
                modal="modal-rental-analysis"
                text="Free Rental Analysis"
              />
            </div>
            <div className="order-1 md:order-2 mx-auto z-40">
              <GatsbyImage
                image={data.hero.childImageSharp.gatsbyImageData}
                className="rounded-lg md:rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <ValueProps />

      <section className="mb-20 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div>
              <GatsbyImage
                image={data.greatResidents.childImageSharp.gatsbyImageData}
              />
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <img src={data.leasing.publicURL} alt="Leasing" />
                <span className="font-display text-primary-500 text-sm tracking-wide font-bold uppercase">
                  Leasing
                </span>
              </div>
              <h2>We Find Great Residents</h2>
              <p>
                We use online advertising and powerful leasing tools to attract
                only the best, qualified renters. Our team will schedule
                showings and process applications to find the right resident for
                your rental.
              </p>
              <ul className="styled-list-checkmark">
                <li>
                  Rental price recommendations and a complete property
                  evaluation
                </li>
                <li>
                  Extensive online and classified advertising plus professional
                  yard signs
                </li>
                <li>
                  Prompt response to rental inquiries and personalized showings
                </li>
                <li>
                  Thorough applicant screening and a detailed lease negotiation
                </li>
                <li>Simple and compliant move-in procedures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center space-x-2 mb-2">
                <img src={data.management.publicURL} alt="Management" />
                <span className="font-display text-primary-500 text-sm tracking-wide font-bold uppercase">
                  Management
                </span>
              </div>
              <h2>Our Promise To You</h2>
              <p>
                With AMG Props, you get a responsive, qualified team that
                specializes in property management for landlords. You'll work
                with the best in the business and can rest easy knowing we've
                got this. We provide:
              </p>
              <ul className="styled-list-checkmark">
                <li>
                  Excellent resident relations with 24/7 emergency assistance
                </li>
                <li>
                  Preferred contractor pricing and detailed invoice reviews
                </li>
                <li>Seasonal maintenance and regular inspections</li>
                <li>On-time rent collection</li>
                <li>Eviction assistance (when necessary)</li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.ourPromise.childImageSharp.gatsbyImageData}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div>
              <GatsbyImage
                image={data.bottomLine.childImageSharp.gatsbyImageData}
              />
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <img src={data.accounting.publicURL} alt="Accounting" />
                <span className="font-display text-primary-500 text-sm tracking-wide font-bold uppercase">
                  Accounting
                </span>
              </div>
              <h2>We Protect Your Bottom Line</h2>
              <p>
                We know your ROI is essential and that earning more and spending
                less is key to your investment strategy. Let our accounting
                professionals save you time, stress, and money. With our
                service, you can expect:
              </p>
              <ul className="styled-list-checkmark">
                <li>
                  A complete understanding of your property's financial status
                </li>
                <li>
                  Detailed monthly statements to track your investment's
                  progress
                </li>
                <li>
                  Original invoices from completed maintenance and repairs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h2>Get A Free Rental Analysis</h2>
              <p>
                How much can you earn on your rental? At AMG Props, we have the
                local market expertise to price your property correctly. We
                examine the market daily, know what properties in your area are
                renting for, and what residents are willing to pay.
              </p>
              <ButtonSolid modal="modal-rental-analysis" text="Let's Start" />
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.rentalAnalysis.childImageSharp.gatsbyImageData}
              />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <RecentBlogPosts />
      <LogoCloud />
      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage.jpg" }
    ) {
      publicURL
    }
    hero: file(relativePath: { eq: "2.0 Owners/1.0-hero-owners.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    greatResidents: file(
      relativePath: { eq: "2.0 Owners/2.0-we-find-great-residents.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    ourPromise: file(relativePath: { eq: "2.0 Owners/3.0-our-promise.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    bottomLine: file(
      relativePath: { eq: "2.0 Owners/4.0-protect-bottom-line.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    rentalAnalysis: file(
      relativePath: { eq: "2.0 Owners/5.0-rental-analysis.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    leasing: file(relativePath: { eq: "2.0 Owners/2.1-leasing.svg" }) {
      publicURL
    }
    management: file(relativePath: { eq: "2.0 Owners/3.1-managment.svg" }) {
      publicURL
    }
    accounting: file(relativePath: { eq: "2.0 Owners/4.1-accounting.svg" }) {
      publicURL
    }
  }
`;
export default Page;
