import React from "react";

import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";

const CTA = ({ ctaHeading, headingLevel, ctaText, className }) => {
  const HeadingTag = headingLevel || "h2";

  return (
    <section
      className={`bg-primary-900 py-16 md:py-14 mx-4 lg:mx-10 xl:mx-16 rounded-2xl md:rounded-3xl text-center md:text-left ${
        className || ""
      }`}
    >
      <div className="container px-6">
        <HeadingTag className="text-white">
          {ctaHeading || ["We'd Love To Hear From You"]}
        </HeadingTag>
        <div className="flex flex-col md:flex-row justify-between md:items-end md:space-x-6">
          <div className="max-w-[700px]">
            <p className="text-xl text-white/80 md:mb-0">
              {ctaText ||
                "Are you looking for a company that provides full-service property management in San Diego? Or are you an AMG Props resident and have questions? Let's connect!"}
            </p>
          </div>

          <div className="grid gap-y-4 md:flex md:space-x-4">
            <ButtonGhost
              href="tel:619-940-4638"
              text="(619) 940-4638"
              className="w-full md:w-auto"
            />

            <ButtonSolid
              modal="modal-contact"
              text="Contact Us"
              altStyle={true}
              className="w-full md:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
