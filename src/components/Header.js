import React from "react";
import logo from "../assets/images/codenakama.png";
import { StyledContainer } from "./Container";
import styled from "styled-components";
import Link from "./Link";

const NavContainer = StyledContainer.extend`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const NavItem = styled.li`
  display: inline;
  margin: 0 2em 0 0;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledHeader = styled.header`
  margin-bottom: 3.7em;
  margin-top: 80px;
`;

export default props => {
  return (
    <StyledHeader>
      <NavContainer>
        <div id="logo-wrapper">
          <Link to="/">
            <img style={{ width: "80px" }} src={logo} alt="logo" />
          </Link>
        </div>
        <nav id="main-nav">
          <NavList>
            <NavItem>
              <Link to="projects" activeStyle={{ color: "#33d399" }}>
                Projects
              </Link>
            </NavItem>
            <NavItem>
              <Link to="blog" activeStyle={{ color: "#33d399" }}>
                Blog
              </Link>
            </NavItem>
            <NavItem>
              <Link to="mailto:mail@mail.com">Contact</Link>
            </NavItem>
          </NavList>
        </nav>
      </NavContainer>
    </StyledHeader>
  );
};