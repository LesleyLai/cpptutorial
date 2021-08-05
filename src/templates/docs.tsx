import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { PageQuery, Mdx, Maybe } from "../../graphql-types";

import Layout from "../components/layout";
import Link from "../components/link";

import NextPrevious from "../components/NextPrevious";
import config from "../../config";
import { Edit, StyledHeading, StyledMainWrapper } from "../components/styles/Docs";

import { TreeNodeData } from "../components/sidebar/treeNode";

interface DocProps {
  data: PageQuery;
}

interface NavItem {
  title?: Maybe<string>;
  url: string;
}

const flattenTree = (node: TreeNodeData, prependUrl = ""): Array<NavItem | undefined> => {
  const { items, ...clone } = node;

  const url = clone.url ? `${prependUrl}${clone.url}` : prependUrl;

  return [
    clone.title ? { title: clone.title, url: url } : undefined,
    ...(items ? items.flatMap((item) => flattenTree(item, url)) : []),
  ];
};

export default class MDXRuntimeTest extends Component<DocProps> {
  render() {
    const { data } = this.props;

    if (!data || !data.mdx || !data.allMdx) {
      return null;
    }

    const mdx = data.mdx;
    const allMdx = data.allMdx;

    const gitHub = require("../components/images/github.svg");
    const githubUrl = config.githubUrl;

    const existingPagePathsWithoutLang = new Set(
      allMdx.edges.map((edge) => edge.node.fields?.pathWithoutLang)
    );

    const nav: NavItem[] = data.allTocYaml.edges
      ?.flatMap(({ node }) => flattenTree(node as TreeNodeData))
      .filter((item) => !!item)
      .filter((item): item is NavItem => existingPagePathsWithoutLang.has(item?.url))
      .map((item) => ({ ...item, url: `/en${item.url}` }));

    // meta tags
    const metaTitle = mdx?.frontmatter?.metaTitle;
    const metaDescription = mdx?.frontmatter?.metaDescription;

    let canonicalUrl = config.gatsby.siteUrl;
    canonicalUrl =
      config.gatsby.pathPrefix !== "/" ? canonicalUrl + config.gatsby.pathPrefix : canonicalUrl;
    canonicalUrl = canonicalUrl + mdx?.fields?.slug;

    return (
      <Layout toc={data.mdx?.tableOfContents}>
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
          <StyledHeading>{mdx?.fields?.title}</StyledHeading>
          <Edit className={"mobileView"}>
            {githubUrl && mdx?.parent && (
              <Link to={`${githubUrl}/tree/master/content/${mdx.parent.relativePath}`}>
                <img src={gitHub} alt={"Github logo"} /> Edit on GitHub
              </Link>
            )}
          </Edit>
        </div>
        <StyledMainWrapper>
          <MDXRenderer>{mdx?.body ?? ""}</MDXRenderer>
        </StyledMainWrapper>
        <div className={"addPaddTopBottom"}>
          <NextPrevious slug={mdx?.fields?.slug!} nav={nav} />
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query Page($id: String!) {
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
    allMdx(filter: { fields: { mdxType: { eq: "page" } } }) {
      edges {
        node {
          fields {
            title
            pathWithoutLang
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
          }
        }
      }
    }
  }
`;
