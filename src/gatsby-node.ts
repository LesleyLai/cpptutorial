import { GatsbyNode } from "gatsby";
import path from "path";
import _ from "lodash";
import config from "../config";

import { PagesQuery } from "../graphql-types";

export const createPages: GatsbyNode["createPages"] = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql<PagesQuery>(
        `
          query Pages {
            allMdx {
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

        // Create blog posts pages.
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

    let value = parent.relativePath.replace(parent.ext, "");

    if (value === "index") {
      value = "";
    }

    if (config.gatsby && config.gatsby.trailingSlash) {
      createNodeField({
        name: `slug`,
        node,
        value: value === "" ? `/` : `/${value}/`,
      });
    } else {
      createNodeField({
        name: `slug`,
        node,
        value: `/${value}`,
      });
    }

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
