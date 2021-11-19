import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
import ApplicationProcess from "../components/Repeating/ApplicationProcess";
import LogoCloud from "../components/Repeating/LogoCloud";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonWithIcon from "../components/Button/ButtonWithIcon";

const Page = ({ data }) => {
  const faqs = [
    {
      question: "What is the application process and policy?",
      answer: (
        <>
          <p>
            The first step is to complete an online application and pay the $40
            application fee. Each person that's over 18 years old will need to
            do this. Once we receive your application, we'll run your credit and
            begin a background check. We'll then contact you within 2-4 days to
            let you know whether your application has been approved and you've
            been selected. Please note that we work on a first-come,
            first-served basis. We also do not rent to anyone who has an unpaid
            eviction on their record.
          </p>
        </>
      ),
    },
    {
      question: "What is your hold policy?",
      answer: (
        <>
          <p>
            We do not put holds on properties. We screen on a first-come,
            first-served basis, and the first qualified candidate that provides
            all the information we've requested and who meets our minimum
            requirements will be selected for the property.
          </p>
        </>
      ),
    },
    {
      question: "What should I know about the security deposit?",
      answer: (
        <>
          <p>
            Landlords can require up to two times the monthly rent for a
            security deposit on unfurnished rental units or three times the
            monthly rent for furnished units. However, most landlords require
            less. Everything you pay when you move in outside of your rent is
            considered security. It's all potentially 100% refundable.
          </p>
        </>
      ),
    },
    {
      question: "How long does a landlord have to refund a security deposit?",
      answer: (
        <>
          <p>
            Landlords are required to send residents an itemized accounting of
            their security deposit within 21 days of move-out. The statement
            must list the amount the landlord is retaining and any amount that's
            refunded. However, landlords do have an option to send an interim
            accounting within 21 days if there is good cause for a delay. In
            that instance, a final accounting is required within 14 days after
            the full itemized accounting is completed.
          </p>
        </>
      ),
    },
    {
      question: "What is a livable (tenantable) condition?",
      answer: (
        <>
          <p>To be deemed livable, a rental unit must have the following:</p>
          <ul>
            <li>- No leaks in the roof, walls, and windows</li>
            <li>- Working plumbing or gas facilities</li>
            <li>
              - Hot and cold running water that's connected to a sewage disposal
              system
            </li>
            <li>- A working heating system</li>
            <li>- Electrical lighting and wiring that's in working order</li>
            <li>
              - Grounds that are kept clean, sanitary, and free from garbage,
              rodents, and vermin
            </li>
            <li>
              - An adequate number of garbage cans or dumpsters that are in good
              repair
            </li>
            <li>- Floors, stairways, and railings that are in good repair</li>
          </ul>
        </>
      ),
    },
    {
      question: "What if I can't pay my rent on time?",
      answer: (
        <>
          <p>
            If you're a resident and you expect you'll be late paying your rent,
            speak with your landlord as soon as possible to see if suitable
            arrangements can be made. If arrangements can't be made, landlords
            do have the right to give you a three-day notice to pay or quit. At
            this point, if you fail to pay within three days, your landlord can
            file an Unlawful Detainer complaint (eviction) against you in court.
          </p>
        </>
      ),
    },
    {
      question: "Can a landlord or manager enter a resident’s rental unit?",
      answer: (
        <>
          <p>
            A landlord or property manager may enter a unit without notice in
            cases of emergency or tenant abandonment or surrender. For any other
            reason, a landlord must give reasonable written notice for a valid
            reason, such as to perform a repair or alteration, show the unit (to
            prospective buyers, residents, contractors, lenders, or repair
            workers), or conduct an inspection related to a tenant's security
            deposit.
          </p>

          <p>
            The landlord must conduct noticed entry during normal business hours
            unless the resident consents otherwise. They must also provide
            24-hour notice, which has been deemed reasonable by the courts.
            Additionally, the notice must be personally delivered, left with an
            adult at the premises or at or near the entry door. A landlord may
            also mail the notice, but they'll need to allow six days between
            mailing and entry.
          </p>

          <p>
            There is one exception during the sale of a property. Oral notice
            may be allowed at that time as long as specific procedures are
            followed.
          </p>
        </>
      ),
    },
  ];
  return (
    <Layout>
      <SearchEngineOptimization
        title="Tenant Property Management San Diego | AMG Props"
        description="Find a great home to rent with AMG Props, San Diego's top tenant property management company. Or access helpful resources if you're already a valued resident."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
      <section className="relative mb-20 md:mb-30 pt-4 md:pt-6 md:min-h-[565px] lg:min-h-[640px]">
        <div className="bg-primary-900/10 absolute right-0 top-0 md:top-[-64px] h-[277px] md:h-[629px] lg:h-[704px] max-w-[1000px] w-full md:w-[37vw] "></div>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>Residential Property Management</h1>
              <p>
                Whether it's a single-family home in the suburbs or a condo near
                the beach, we have rentals to fit both your lifestyle and
                budget. And once you're an AMG Props resident, we'll take great
                care of you!
              </p>
              <ButtonSolid modal="modal-rental-analysis" text="Let's Connect" />
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

      <section className="mb-20 md:mb-24">
        <div className="container">
          <header className="mb-10">
            <h2>Resident Links & Resources</h2>
          </header>
          <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-10 lg:gap-x-20 items-center">
            <div>
              <div className="font-display text-gray-400 text-sm uppercase tracking-wide mb-6">
                Current Residents
              </div>

              <a
                href="https://amgpropertymgmt.appfolio.com/connect/users/sign_in"
                target="_blank"
                rel="noreferrer"
                className="border border-gray-200 hover:border-primary-500 text-gray-600 rounded-md p-4 flex items-start space-x-4 mb-4 no-underline transition-colors duration-300 ease-linear"
              >
                <img
                  src={data.residentPortal.publicURL}
                  alt="Resident Portal"
                />
                <div>
                  <div className="font-medium text-primary-900">
                    Resident Portal
                  </div>
                  <p className="text-sm mb-0">
                    Pay your monthly rent and view your account information.
                  </p>
                </div>
              </a>

              <a
                href="https://app.propertymeld.com/tenant/amg-props/"
                target="_blank"
                rel="noreferrer"
                className="border border-gray-200 hover:border-primary-500 text-gray-600 rounded-md p-4 flex items-start space-x-4 no-underline transition-colors duration-300 ease-linear"
              >
                <img
                  src={data.maintenanceRequests.publicURL}
                  alt="Maintenance Requests"
                />
                <div>
                  <div className="font-medium text-primary-900">
                    Maintenance Requests
                  </div>
                  <p className="text-sm mb-0">
                    Let us know what needs to be fixed or evaluated.
                  </p>
                </div>
              </a>
            </div>

            <div>
              <div className="font-display text-gray-400 text-sm uppercase tracking-wide mb-6">
                Future Residents
              </div>
              <a
                href="https://amgpropertymgmt.appfolio.com/connect/users/request_access"
                target="_blank"
                rel="noreferrer"
                className="border border-gray-200 hover:border-primary-500 text-gray-600 rounded-md p-4 flex items-start space-x-4 mb-4 no-underline transition-colors duration-300 ease-linear"
              >
                <img
                  src={data.submitApplication.publicURL}
                  alt="Create an Account"
                />
                <div>
                  <div className="font-medium text-primary-900">
                    Create an Account
                  </div>
                  <p className="text-sm mb-0">
                    Get access to the Resident Portal.
                  </p>
                </div>
              </a>
              <a
                href="https://amgpropertymgmt.appfolio.com/listings/rental_applications/new?listable_uid=febb6c07-6252-4ce0-9dfa-e2c810cbf3c8&source=Website"
                target="_blank"
                rel="noreferrer"
                className="border border-gray-200 hover:border-primary-500 text-gray-600 rounded-md p-4 flex items-start space-x-4 no-underline transition-colors duration-300 ease-linear"
              >
                <img
                  src={data.residentPortal.publicURL}
                  alt="Submit an Application"
                />
                <div>
                  <div className="font-medium text-primary-900">
                    Submit an Application
                  </div>
                  <p className="text-sm mb-0">
                    Fill out and send in your rental application.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div>
              <GatsbyImage
                image={data.vacancies.childImageSharp.gatsbyImageData}
              />
            </div>
            <div>
              <h2>What's Available For Rent</h2>
              <p>
                We're here to help you find your next home. Take a look at
                available apartments, condos, single-family homes, and more that
                you can rent here in the San Diego area.
              </p>
              <ButtonWithIcon href="/vacancies/" text="Explore Properties" />
            </div>
          </div>
        </div>
      </section>

      <ApplicationProcess />
      <Testimonials />

      <section className="mb-20 md:mb-32">
        <div className="container">
          <header className="mb-8 md:mb-10">
            <h2>Resident FAQs</h2>
          </header>

          <Accordion
            allowZeroExpanded={true}
            className="border-t border-solid border-primary-600/20"
          >
            {faqs.map((faq, i) => {
              return (
                <div key={i}>
                  <AccordionItem
                    className="border-b border-solid border-gray-700/20 pt-6 md:pt-7 pb-5 md:pb-6"
                    uuid={i}
                  >
                    <AccordionItemButton className="flex items-center justify-between focus:outline-none">
                      <p className="heading-six mb-0">{faq.question}</p>
                      <AccordionItemState>
                        {(state) => {
                          const icon = state.expanded
                            ? "rotate-180"
                            : "rotate-0";
                          return (
                            <svg
                              width="28"
                              height="12"
                              viewBox="0 0 28 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className={`transform ${icon} text-lg text-primary-400/50 ml-4`}
                            >
                              <path
                                d="M14 12L27.8564 0L0.143594 0L14 12Z"
                                fill="#91BD14"
                              />
                            </svg>
                          );
                        }}
                      </AccordionItemState>
                    </AccordionItemButton>
                    <AccordionItemPanel className="pt-6 pr-10 max-w-[880px] animate-fadeIn">
                      <p className="mb-0">{faq.answer}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </div>
              );
            })}
          </Accordion>
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
      relativePath: { eq: "open-graph/facebook/Homepage.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage.jpg" }
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
