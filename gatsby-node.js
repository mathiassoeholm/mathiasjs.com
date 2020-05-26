const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    result.data.allMdx.edges.map(({ node: post }) => {
      createPage({
        path: post.frontmatter.slug,
        component: path.resolve("./src/templates/post.tsx"),
        context: {
          slug: post.frontmatter.slug,
        },
      });
    });
  });
};
