import * as React from "react";
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { createGlobalStyle } from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Robins from "../components/Robins";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Aileron", sans-serif;
    h1 {
      font-family: Assistant, Aileron, sans-serif;
    }
  }

  html, body,
  #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const IndexPage = () => (
  <Layout>
    <GlobalStyle />
    <SEO title="Home" />
    <Robins />
  </Layout>
);

export default IndexPage;
