import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
import ValueProps from "../components/Repeating/ValueProps";
import LogoCloud from "../components/Repeating/LogoCloud";
import CallToAction from "../components/Repeating/CTA";
import ModalTeamMembers from "../components/Modal/ModalTeamMembers";
import ButtonSolid from "../components/Button/ButtonSolid";

const Page = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const content = {
    team: [
      {
        image: data.amanda.childImageSharp.gatsbyImageData,
        name: "Amanda Gresiak",
        brokerNumber: "Broker CA BRE#: 01895190",
        phone: "619-378-0506",
        email: "Amanda@amgprops.com",
        bio: (
          <>
            <p>
              Amanda Gresiak is our company’s leader. She has been in the
              property management industry in some capacity since 2004 and
              continues to learn more and more each day. If she could be
              anywhere other than work right now, she would be with her husband
              & kids on an adventure. When Amanda was a child, she dreamt of
              being a pediatrician. On any given Sunday morning, you can find
              Amanda practicing yoga and at church. Amanda wants to be
              remembered as loving, adventurous, full of gratitude & driven. The
              qualities that Amanda brings to work is her determination & her
              vision for the company. Three words that would describe Amanda are
              headstrong, determined & fun loving. The rest of the office may
              say that Amanda is chatty, a whirlwind & a mom. One goal that
              Amanda has for this coming year is to purchase some real estate to
              add to her portfolio. A few of Amanda’s daily routines are working
              out, prayer & journaling & bedtime snuggles with her two
              daughters. Some publications that Amanda reads are San Diego
              Magazine and various self-development books. Amanda is happiest
              when she is out in nature exploring our beautiful
              town/city/country/world. The person that Amanda most admires is
              Jesus, because well… Three of Amanda’s top pet peeves would be bad
              merging onto the freeway in front of her, people not being
              resourceful, and her children waking up early when she’s trying to
              have her “me time”! A typical day for Amanda starts at 4:30am with
              exercising & meditation, bringing her kids to school, heading to
              work, some sort of family event or dinner, and then bed. Amanda’s
              main “talent” is walking in place at her desk at work to get steps
              on her Fitbit. A few causes that Amanda supports are homelessness,
              childhood hunger, breast cancer research, & cystic fibrosis
              research. Amanda loves entertaining friends at her home and
              meeting at the beach for walks. Amanda’s motto would be “surround
              yourself with people who are smarter than you”.
            </p>
          </>
        ),
      },
      {
        image: data.fpo.childImageSharp.gatsbyImageData,
        name: "Brad Darlington",
        brokerNumber: "",
        phone: "",
        email: "",
        bio: (
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </>
        ),
      },
      {
        image: data.david.childImageSharp.gatsbyImageData,
        name: "David McKinney",
        brokerNumber: "",
        phone: "",
        email: "",
        bio: (
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </>
        ),
      },
      {
        image: data.kevin.childImageSharp.gatsbyImageData,
        name: "Kevin Gresiak",
        brokerNumber: "",
        phone: "",
        email: "",
        bio: (
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </>
        ),
      },
    ],
  };
  return (
    <Layout>
      <SearchEngineOptimization
        title="About AMG Props | San Diego Property Management Company"
        description="AMG Props is a trusted, full-service property management company that's managed over 500 properties in communities throughout the greater San Diego area."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
      <section className="relative mb-20 md:mb-30 pt-4 md:pt-6 md:min-h-[565px] lg:min-h-[640px]">
        <div className="bg-primary-900/10 absolute right-0 top-0 md:top-[-64px] h-[277px] md:h-[629px] lg:h-[704px] max-w-[1000px] w-full md:w-[37vw] "></div>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>We're Team AMG</h1>
              <p>
                We've managed over 500 properties in communities throughout the
                greater San Diego area and are leaders in the rental
                marketplace. Our team expertly analyzes real estate trends and
                successfully promotes and manages a portfolio of properties.
                We're committed to excellence in everything we do—from
                advertising to leasing to maintenance and more.
              </p>
              <ButtonSolid modal="modal-contact" text="Reach Us" />
            </div>
            <div className="order-1 md:order-2 mx-auto">
              <GatsbyImage
                image={data.hero.childImageSharp.gatsbyImageData}
                className="rounded-lg md:rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <LogoCloud />

      <section className="mb-20 md:mb-30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div>
              <GatsbyImage
                image={data.ourPromise.childImageSharp.gatsbyImageData}
              />
            </div>
            <div>
              <h2>Our Promise</h2>
              <p>
                As your local property management team, we promise exceptional
                service that meets and exceeds your expectations. We want the
                investors and residents we work with to have a great experience
                and take comfort in knowing that a highly experienced group of
                professionals is handling all their needs with the utmost care.
              </p>
              <div className="text-gray-900 font-medium flex items-center">
                <span className="bg-gray-900 w-6 h-px mr-2"></span> AMG
                Properties
              </div>
            </div>
          </div>
        </div>
      </section>

      <ValueProps />

      <section className="mb-24 md:mb-30">
        <div className="container">
          <header className="mb-10 md:mb-12 text-center">
            <h2>The Team Working For You</h2>
          </header>

          <div className="grid md:grid-cols-4 gap-y-12 gap-x-6">
            {content.team.map((content, i) => {
              return (
                <button
                  aria-label="Modal trigger"
                  data-modal-open="modal-team-members"
                  onClick={() => setSlideIndex(i)}
                  key={i}
                  className="group relative text-left no-underline"
                >
                  <div className="overflow-hidden mb-4">
                    <GatsbyImage
                      image={content.image}
                      alt={content.heading}
                      className="mx-auto w-full transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                    />
                  </div>
                  <p className="heading-six mb-0">{content.name}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <Testimonials />
      <CallToAction />
      <ModalTeamMembers slideIndex={slideIndex} slides={content.team} />
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
    hero: file(relativePath: { eq: "4.0 About/1.0-about-hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    ourPromise: file(relativePath: { eq: "4.0 About/2.0-our-promise.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    amanda: file(relativePath: { eq: "4.0 About/amanda.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    david: file(relativePath: { eq: "4.0 About/david.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    kevin: file(relativePath: { eq: "4.0 About/kevin.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    fpo: file(relativePath: { eq: "4.0 About/fpo.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
  }
`;
export default Page;
