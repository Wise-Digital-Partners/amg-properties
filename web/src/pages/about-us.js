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
              Amanda Gresiak is a remarkable individual, a professional real
              estate broker, and the Founder and owner of AMG Props, a property
              management company dedicated to linking clients to their real
              estate goals. Her achievements in the real estate industry have
              made her a pacesetter with amazing contributions. Amanda attended
              San Diego State University and also earned a Liberal Arts &
              Sciences Associate of Arts Degree from Arizona State University.
              Her education, coupled with her acquired knowledge and skills
              built by 17 years of experience, has enabled her to build a
              successful brand and career.
            </p>

            <p>
              Amanda’s journey started in 2004 as a receptionist, working in
              Boulder City, Colorado. She then made a successful transition to
              property management. She also has two years of working experience
              in private investment across San Diego and one year in sales under
              a local property management company. Serving across these
              positions, Amanda learned leadership, teamwork, and organization
              skills unique to the business world. She brought them to bear when
              she finally started her own company in 2010.
            </p>

            <p>
              Amanda’s AMG Props has since grown organically to become one of
              the best full-service property management companies across the San
              Diego metropolitan area and its surroundings through referrals of
              existing clients and surrounding realtors. Her strong sales and
              negotiating skills make her a keen advocate for her clients and
              the company. She proactively seeks new ways to enhance her
              services and continually attain excellence, with client
              satisfaction the ultimate objective.
            </p>

            <p>
              Amanda has made a name for herself as a hardworking and energetic
              industry professional with an indispensable passion for her craft.
              She is friendly and easy to get along with, enabling her to build
              and maintain excellent working relationships. Amanda uses
              effective and efficient communication skills, attention to detail,
              time management, and organization throughout her services. She
              always keeps her clients informed throughout the process and
              strives to get them the best bottom line. Motivated by the desire
              to become a global expert in her field, Amanda has educated
              herself in all things property management by being an active
              member of NARPM, SDAR, and IREM.
            </p>

            <p>
              As a broker, Amanda oversees the company's operations, developing
              ideas and growing the company’s systems and operations to be more
              efficient so that clients can get more value. Her experience has
              led her and the company to the success they enjoy today. To get
              there, Amanda spent time and resources dialing in the company’s
              systems and procedures in the office and creating a culture of
              empathy and empowerment for investors, tenants, and staff alike.
              With deep industry knowledge, coupled with an analytical and
              detail-oriented approach, Amanda is equipped to understand the
              most discerning clients' needs, delivering an experience rooted in
              customer service, integrity, and expertise.
            </p>

            <p>
              Amanda loves spending time with her friends and family outside
              work or engaging in self-developing activities like hiking,
              adventuring, running, and fitness. In addition, she is involved in
              church leadership. She takes pleasure in participating in
              philanthropic activities like serving the homeless through a local
              outreach called We See You San Diego, San Diego Rescue Mission.
            </p>
          </>
        ),
      },
      // {
      //   image: data.david.childImageSharp.gatsbyImageData,
      //   name: "David McKinney",
      //   brokerNumber: "",
      //   phone: "",
      //   email: "",
      //   bio: "",
      // },
      // {
      //   image: data.kevin.childImageSharp.gatsbyImageData,
      //   name: "Kevin Gresiak",
      //   brokerNumber: "",
      //   phone: "",
      //   email: "",
      //   bio: "",
      // },
    ],
  };
  return (
    <Layout>
      <SearchEngineOptimization
        title="About AMG Props | San Diego Property Management Company"
        description="AMG Props is a trusted, full-service property management company that's managed over 500 properties in communities throughout the greater San Diego area."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
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
                <>
                  {content.bio ? (
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
                  ) : (
                    <div key={i} className="text-left no-underline">
                      <div className="mb-4">
                        <GatsbyImage
                          image={content.image}
                          alt={content.heading}
                          className="mx-auto w-full"
                        />
                      </div>
                      <p className="heading-six mb-0">{content.name}</p>
                    </div>
                  )}
                </>
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
      relativePath: { eq: "open-graph/facebook/FB-About.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Twitter-About.jpg" }
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
