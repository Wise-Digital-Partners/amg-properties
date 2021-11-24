import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ApplicationProcess from "../components/Repeating/ApplicationProcess";
import CallToAction from "../components/Repeating/CTA";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Vacancies | San Diego Property Management Company | AMG"
        description="What's for rent? Search our list of vacancies in the greater San Diego area—everything from apartments to condos to single-family homes."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
      <section className="mb-20 md:mb-24 pt-12 md:pt-16">
        <div className="container">
          <header className="max-w-[720px] mb-12 md:mb-14">
            <h1>What's For Rent</h1>
            <p>
              Search our list of available rentals in the greater San Diego
              area—everything from apartments to condos to single-family homes.
            </p>
          </header>
          <iframe
            title="Showmojo property listings"
            frameBorder="0"
            marginHeight="0px"
            marginWidth="0px"
            width="100%"
            height="782px"
            src="https://showmojo.com/5555c920be/listings/mapsearch"
          ></iframe>
        </div>
      </section>

      <ApplicationProcess />
      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/FB-Vacancies.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Twitter-Vacancies.jpg" }
    ) {
      publicURL
    }
    hero: file(relativePath: { eq: "3.0 Residents/1.0-hero-residents.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    vacancies: file(relativePath: { eq: "3.0 Residents/2.0 Vacancies.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    residentPortal: file(
      relativePath: { eq: "3.0 Residents/resident-portal.svg" }
    ) {
      publicURL
    }
    maintenanceRequests: file(
      relativePath: { eq: "3.0 Residents/maintenance-requests.svg" }
    ) {
      publicURL
    }
    createAccount: file(
      relativePath: { eq: "3.0 Residents/create-account.svg" }
    ) {
      publicURL
    }
    submitApplication: file(
      relativePath: { eq: "3.0 Residents/submit-application.svg" }
    ) {
      publicURL
    }
  }
`;
export default Page;
