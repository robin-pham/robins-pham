import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 0;
  border-bottom: 1px solid #dadada;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = ({ title }) => (
  <header
    style={{
      width: "100%",
    }}
  >
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            color: `black`,
          }}
        >
          {title}
        </Link>
      </h1>
      <div></div>
    </HeaderContainer>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: ``,
};

export default Header;
