// Libs
import React from 'react';
import styled from 'styled-components';
import Link from './Link'

// Components
const Logo = styled.img`margin-top: 40px;`;
const Wrapper = styled.div`text-align: center;`;
const Nav = styled.nav`
  > * {
    margin: 0 10px;
  }
`;
const StyledLink = styled(Link)`
  color: red;
  background: blue;
`


function Header() {
  return (
    <Wrapper>
      <Nav>
        <Link  href="/">
          Home
        </Link>
        <Link  href="/about">
          About
        </Link>
      </Nav>
      <Logo src="static/imgs/logo.svg" alt="Test" />
    </Wrapper>
  );
}

export default Header;