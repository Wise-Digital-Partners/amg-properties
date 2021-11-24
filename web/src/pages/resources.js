import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import BlogPostPreview from "../components/Blog/BlogPostGrid";
import GraphQLErrorList from "../components/Blog/graphql-error-list";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";
import CallToAction from "../components/Repeating/CTA";

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
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              gatsbyImageData
            }
            alt
          }
          categories {
            _id
            title
          }
          title
          slug {
            current
          }
        }
      }
    }
  }
`;

const ArchivePage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <Layout>
      <SearchEngineOptimization
        title="Resources | San Diego Property Management Company | AMG"
        description="Get great tips that'll help you get the most from your investment—straight from the property management experts at AMG Props. "
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-10 md:pt-16 mb-20 md:mb-30">
        <div className="container">
          <header className="mb-10 md:mb-20">
            <h1>Tips From The Experts</h1>
          </header>
          {postNodes && postNodes.length > 0 && (
            <BlogPostPreview nodes={postNodes} />
          )}
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
};

export default ArchivePage;
