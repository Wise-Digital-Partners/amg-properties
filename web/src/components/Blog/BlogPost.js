import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { differenceInDays, formatDistance, format } from "date-fns";
import PortableText from "./portableText";
import styled from "@emotion/styled";
import tw from "twin.macro";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";

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
    siteMetadata,
    slug,
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
          <header className="mb-8 md:mb-10">
            <h1>{title}</h1>
          </header>

          <div className="flex justify-between items-end">
            <div className="flex">
              {authors.map((author, i) => (
                <>
                  {author.image && (
                    <div className="mr-3" key={i}>
                      <GatsbyImage
                        image={author.image.asset.gatsbyImageData}
                        alt={author.image.alt}
                        className="w-12 h-12 rounded-full z-0"
                      />
                    </div>
                  )}
                </>
              ))}

              <div>
                <div className="text-primary-900 font-body font-medium text-sm flex items-center space-x-1 mb-1">
                  <span>By</span>
                  {authors && (
                    <div>
                      <ul>
                        {authors.map((author, i) => (
                          <li key={i}>{author.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {publishedAt && (
                  <div className="text-sm">
                    {differenceInDays(new Date(publishedAt), new Date()) > 3
                      ? formatDistance(new Date(publishedAt), new Date())
                      : format(new Date(publishedAt), "MMMM Mo, yyyy")}
                  </div>
                )}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-7">
              <FacebookShareButton
                url={`${siteMetadata.siteUrl}/${slug.current}/`}
                quote={title}
              >
                <i className="fab fa-facebook-f text-primary-500 hover:text-gray-900 text-xl transition-colors duration-300 ease-linear"></i>
              </FacebookShareButton>

              <LinkedinShareButton
                url={`${siteMetadata.siteUrl}/${slug.current}/`}
                title={title}
              >
                <i className="fab fa-linkedin-in text-primary-500 hover:text-gray-900 text-xl transition-colors duration-300 ease-linear"></i>
              </LinkedinShareButton>

              <TwitterShareButton
                url={`${siteMetadata.siteUrl}/${slug.current}/`}
                title={title}
              >
                <i className="fab fa-twitter text-primary-500 hover:text-gray-900 text-xl transition-colors duration-300 ease-linear"></i>
              </TwitterShareButton>

              <EmailShareButton
                url={`${siteMetadata.siteUrl}/${slug.current}/`}
                subject={title}
              >
                <i className="fas fa-envelope text-primary-500 hover:text-gray-900 text-xl transition-colors duration-300 ease-linear"></i>
              </EmailShareButton>
            </div>
          </div>

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
          <div className="mb-16 md:mb-20 flex justify-center">
            <GatsbyImage
              image={props.mainImage.asset.gatsbyImageData}
              alt={props.mainImage.alt}
            />
          </div>
        )}

        <StyledContent className="max-w-[800px] mx-auto mb-12 md:mb-16">
          {_rawBody && <PortableText blocks={_rawBody} />}
        </StyledContent>

        <div className="flex justify-center items-center space-x-7 mb-20 md:mb-30">
          <FacebookShareButton
            url={`${siteMetadata.siteUrl}/${slug.current}/`}
            quote={title}
          >
            <i className="fab fa-facebook-f text-primary-500 hover:text-gray-900 text-xl transition-colors duration-300 ease-linear"></i>
          </FacebookShareButton>

          <LinkedinShareButton
            url={`${siteMetadata.siteUrl}/${slug.current}/`}
            title={title}
          >
            <i className="fab fa-linkedin-in text-primary-500 hover:text-gray-900 text-xl transition-colors duration-300 ease-linear"></i>
          </LinkedinShareButton>

          <TwitterShareButton
            url={`${siteMetadata.siteUrl}/${slug.current}/`}
            title={title}
          >
            <i className="fab fa-twitter text-primary-500 hover:text-gray-900 text-xl transition-colors duration-300 ease-linear"></i>
          </TwitterShareButton>

          <EmailShareButton
            url={`${siteMetadata.siteUrl}/${slug.current}/`}
            subject={title}
          >
            <i className="fas fa-envelope text-primary-500 hover:text-gray-900 text-xl transition-colors duration-300 ease-linear"></i>
          </EmailShareButton>
        </div>
      </div>

      <RecentBlogPosts heading={false} className="mb-16 md:mb-30" />

      <CallToAction />
    </article>
  );
}

export default BlogPost;
