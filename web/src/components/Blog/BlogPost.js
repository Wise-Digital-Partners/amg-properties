import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { differenceInDays, formatDistance, format } from "date-fns";
import PortableText from "./portableText";
import styled from "@emotion/styled";
import tw from "twin.macro";

import RecentBlogPosts from "../Repeating/RecentBlogPosts";
import CallToAction from "../Repeating/CTA";

const StyledContent = styled.div`
  p,
  span,
  li {
    ${tw`md:text-xl`}
  }
  ul {
    ${tw`list-disc pl-7 mb-6 flex flex-col space-y-0.5`}
  }
  ol {
    ${tw`list-decimal pl-7 mb-6 flex flex-col space-y-0.5`}
  }
`;

function BlogPost(props) {
  const {
    _rawBody,
    authors,
    // categories,
    title,
    mainImage,
    publishedAt,
  } = props;
  return (
    <article className="pt-10 md:pt-12">
      <div className="container">
        <div className="max-w-[800px] mx-auto mb-10">
          <header>
            <h1>{title}</h1>
          </header>

          <div className="text-primary-900 font-heading font-semibold flex items-center space-x-1">
            <span>By</span>
            {authors && (
              <div>
                <ul>
                  {authors.map((author, i) => (
                    <li className="" key={i}>
                      {author.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {publishedAt && (
            <div>
              {differenceInDays(new Date(publishedAt), new Date()) > 3
                ? formatDistance(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), "MMMM Mo, yyyy")}
            </div>
          )}

          {/* {categories && (
            <div className="mb-8">
              <ul>
                {categories.slice(0, 1).map((category) => (
                  <li
                    className="text-primary-500 font-bold tracking-widest uppercase"
                    key={category._id}
                  >
                    {category.title}
                  </li>
                ))}
              </ul>
            </div>
          )} */}
        </div>

        {mainImage && mainImage.asset && (
          <div className="mb-16 md:mb-20">
            <GatsbyImage
              image={props.mainImage.asset.gatsbyImageData}
              alt={props.mainImage.alt}
            />
          </div>
        )}

        <StyledContent className="max-w-[800px] mx-auto mb-16 md:mb-20">
          {_rawBody && <PortableText blocks={_rawBody} />}
        </StyledContent>
      </div>

      <RecentBlogPosts heading={false} className="mb-16 md:mb-30" />

      <CallToAction />
    </article>
  );
}

export default BlogPost;
