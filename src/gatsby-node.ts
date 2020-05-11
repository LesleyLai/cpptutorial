import { GatsbyNode } from "gatsby";
import path from "path";
import _ from "lodash";

import { PagesQuery } from "../graphql-types";

import { languages } from "./utils/translations";

export const createPages: GatsbyNode["createPages"] = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // Create redirect from root to english verison
  createRedirect({
    fromPath: "/",
    toPath: "/en",
    redirectInBrowser: true,
    isPermanent: true,
  });

  return new Promise((resolve, reject) => {
    resolve(
      graphql<PagesQuery>(
        `
          query Pages {
            allMdx(filter: { fields: { mdxType: { eq: "page" } } }) {
              edges {
                node {
                  fields {
                    id
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors); // eslint-disable-line no-console
          reject(result.errors);
        }

        // Create pages.
        result.data?.allMdx.edges.forEach(({ node }) => {
          if (node.fields) {
            createPage({
              path: node.fields.slug ? node.fields.slug : "/",
              component: path.resolve("./src/templates/docs.tsx"),
              context: {
                id: node.fields.id,
              },
            });
          }
        });
      })
    );
  });
};

export const onCreateNode: GatsbyNode["onCreateNode"] = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);

    let nodePath: string = parent.relativePath.replace(parent.ext, "");

    let mdxType = "";
    if (nodePath.startsWith("pages/")) {
      nodePath = nodePath.substr(5);
      mdxType = "page";
    } else if (nodePath.startsWith("glossary/")) {
      nodePath = nodePath.substr(8);
      mdxType = "glossary";
    } else {
      throw new Error("Unsupported mdx types");
    }

    const nodeLang = languages.find(lang => nodePath.endsWith(lang));
    if (nodeLang) {
      nodePath = nodePath.substr(0, nodePath.length - nodeLang.length);
    } else {
      throw new Error("Unsupported language for mdx");
    }

    nodePath = nodePath.endsWith("/") ? nodePath.slice(0, -1) : nodePath;

    createNodeField({
      name: `pathWithoutLang`,
      node,
      value: `${nodePath}`,
    });

    if (mdxType == "page") {
      createNodeField({
        name: `slug`,
        node,
        value: `/${nodeLang}${nodePath}`,
      });
    }

    createNodeField({
      name: `mdxType`,
      node,
      value: `${mdxType}`,
    });

    createNodeField({
      name: "id",
      node,
      value: node.id,
    });

    createNodeField({
      name: "title",
      node,
      value: (node as any).frontmatter.title || _.startCase(parent.name),
    });
  }
};

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        $components: path.resolve(__dirname, "src/components"),
        buble: "@philpl/buble", // to reduce bundle size
      },
    },
  });
};

export const onCreateBabelConfig: GatsbyNode["onCreateBabelConfig"] = ({ actions }) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-proposal-export-default-from",
    options: {},
  });
};
