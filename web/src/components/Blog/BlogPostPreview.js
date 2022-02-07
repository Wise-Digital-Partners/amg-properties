import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { getBlogUrl } from "../../lib/helpers";
// import PortableText from "./portableText";
// import { format } from "date-fns";

function BlogPostPreview(props) {
  return (
    <AniLink
      fade
      to={getBlogUrl(props.publishedAt, props.slug.current)}
      className="no-underline"
    >
      <div className="group">
        {props.mainImage && props.mainImage.asset && (
          <div className="overflow-hidden mb-2.5">
            <GatsbyImage
              image={props.mainImage.asset.gatsbyImageData}
              alt={props.mainImage.alt}
              className="w-full transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
            />
          </div>
        )}
        <div>
          {props.categories && (
            <>
              {props.categories.slice(0, 1).map((category) => (
                <div
                  className="font-display text-gray-300 font-bold tracking-wide text-sm uppercase mb-2.5"
                  key={category._id}
                >
                  {category.title}
                </div>
              ))}
            </>
          )}
          <p className="heading-five mb-0">{props.title}</p>
          {/* {props._rawExcerpt && (
          <div>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )} */}
          {/* <div>{format(new Date(props.publishedAt), "MMMM d, yyyy")}</div> */}
        </div>
      </div>
    </AniLink>
  );
}

export default BlogPostPreview;
