import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";

import Layout from "../components/layout";
import Link from "../components/link";

import NextPrevious from "../components/NextPrevious";
import config from "../../config";
import { Edit, StyledHeading, StyledMainWrapper } from "../components/styles/Docs";
import Mdx from "../types/mdx";

import { TreeNodeData } from "../components/sidebar/treeNode";

import fp from "lodash/fp";

interface MdxEdge {
  node: {
    fields: {
      slug: string;
      title: string;
    };
  };
}

interface DocProps {
  location: any;
  data: {
    mdx: Mdx;
    allMdx: {
      edges: Array<MdxEdge>;
    };
    allTocYaml: {
      edges: Array<{
        node: TreeNodeData;
      }>;
    };
  };
}

interface NavItem {
  title?: string;
  url: string;
}

const flattenTree = (node: TreeNodeData): Array<NavItem | undefined> => [
  node.url ? (fp.flow(fp.clone, fp.unset("items"))(node) as NavItem) : undefined,
  ...fp.flatMap(flattenTree)(node.items),
];

export default class MDXRuntimeTest extends Component<DocProps> {
  render() {
    const { data } = this.props;

    if (!data) {
      return null;
    }
    const { allMdx, mdx } = data;

    const gitHub = require("../components/images/github.svg");
    const githubUrl = config.githubUrl;

    const existingPageUrls = new Set(allMdx.edges.map(edge => edge.node.fields.slug));

    const nav: NavItem[] = fp.flow(
      fp.flatMap(({ node }) => flattenTree(node)),
      fp.filter((item): item is NavItem => item != undefined),
      fp.filter(item => existingPageUrls.has(item.url))
    )(data.allTocYaml.edges);

    // meta tags
    const metaTitle = mdx.frontmatter.metaTitle;

    const metaDescription = mdx.frontmatter.metaDescription;

    let canonicalUrl = config.gatsby.siteUrl;
    canonicalUrl =
      config.gatsby.pathPrefix !== "/" ? canonicalUrl + config.gatsby.pathPrefix : canonicalUrl;
    canonicalUrl = canonicalUrl + mdx.fields.slug;

    return (
      <Layout {...this.props}>
        <Helmet>
          {metaTitle && <title>{metaTitle}</title>}
          {metaTitle && <meta name="title" content={metaTitle} />}
          {metaDescription && <meta name="description" content={metaDescription} />}
          {metaTitle && <meta property="og:title" content={metaTitle} />}
          {metaDescription && <meta property="og:description" content={metaDescription} />}
          {metaTitle && <meta property="twitter:title" content={metaTitle} />}
          {metaDescription && <meta property="twitter:description" content={metaDescription} />}
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <div className={"titleWrapper"}>
          <StyledHeading>{mdx.fields.title}</StyledHeading>
          <Edit className={"mobileView"}>
            {githubUrl && (
              <Link
                className={"gitBtn"}
                to={`${githubUrl}/tree/master/content/${mdx.parent.relativePath}`}
              >
                <img src={gitHub} alt={"Github logo"} /> Edit on GitHub
              </Link>
            )}
          </Edit>
        </div>
        <StyledMainWrapper>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </StyledMainWrapper>
        <div className={"addPaddTopBottom"}>
          <NextPrevious mdx={mdx} nav={nav} />
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
      }
    }
    allMdx {
      edges {
        node {
          fields {
            slug
            title
          }
        }
      }
    }
    allTocYaml {
      edges {
        node {
          title
          url
          upcoming
          items {
            url
            title
            upcoming
            items {
              url
              title
              upcoming
            }
          }
        }
      }
    }
  }
`;
