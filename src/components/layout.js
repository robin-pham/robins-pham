/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import styled from "styled-components";
import "./layout.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1 1 auto;
  padding: 0 1.0875rem 1.45rem;
  margin-top: 1.45rem;
`;

const Main = styled.main`
  flex: 1 1 auto;
  width: 100%;
`;

const Footer = styled.footer`
  border-top: 1px solid #dadada;
  margin: 0 auto;
  padding-top: 1.45rem;
  width: 100%;
  max-width: 960px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header title={`Hi, we're Robin Pham`} />
      <Container>
        <Main>{children}</Main>
        <Footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()} Robins Pham
        </Footer>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
