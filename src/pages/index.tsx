import React from "react";
import { graphql } from "gatsby";
import { IndexPageQuery } from "../../graphql-types";
import { Link } from "gatsby";
import { Layout } from "components";

const Index: React.FC<{ data: IndexPageQuery }> = ({ data }) => {
  return (
    <Layout>
      <p>Hello</p>
      {data.allMdx.edges.map(({ node }) => (
        <Link key={node.id} to={node.frontmatter.slug}>
          {node.frontmatter.title}
        </Link>
      ))}
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query IndexPage {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
          }
        }
      }
    }
  }
`;
