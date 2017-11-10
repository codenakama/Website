import React from "react";
import styled from "styled-components";
import Container from "../components/Container";
import JumboTitle from "../components/JumboTitle";
import Title from "../components/Title";
import blog1Image from "../assets/images/blog_post_1.png";
import { Section, Image } from "../components/base/StyledComponents";
import { Flex, Box } from "grid-styled";
import Card from "../components/Card";
import Link from "gatsby-link";

const Blog = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  console.log(data);
  return (
    <Container>
      <Section>
        <Title>Blog Posts</Title>
        <Flex>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <Box width={1 / 2} mr={2}>
                  <Link to={post.frontmatter.path}>
                    <Card
                      image={
                        post.frontmatter.img.childImageSharp.responsiveSizes.src
                      }
                      category="Web Development"
                      date={post.frontmatter.date}
                      title={post.frontmatter.title}
                      description={post.excerpt}
                    />
                  </Link>
                </Box>
              );
            })}
        </Flex>

        {/* <Flex justify="center">
          <Box>
            <MoreButton href="blog">Read all</MoreButton>
          </Box>
        </Flex> */}
      </Section>
    </Container>
  );
};

export default Blog;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            img {
              childImageSharp {
                responsiveSizes(maxWidth: 400) {
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
