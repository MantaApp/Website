// Libs
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-static';

// Images
import LogoImg from '../static/imgs/logo.svg';

// Components
const Logo = styled.img`margin-top: 40px;`;
const Wrapper = styled.div`text-align: center;`;
const LinkStyle = {
  textTransform: 'uppercase',
  fontSize: '14px',
  letterSpacing: '1px',
  fontWeight: '600',
  color: 'white',
  marin: '0px 5px',
};

const Nav = styled.nav`
  > * {
    margin: 0 10px;
  }
`;

function Header() {
  return (
    <Wrapper>
      <Nav>
        <Link style={LinkStyle} to="/">
          Home
        </Link>
        <Link style={LinkStyle} to="/features">
          Features
        </Link>
        <Link style={LinkStyle} to="/about">
          About
        </Link>
      </Nav>
      <Logo src={LogoImg} alt="Test" />
    </Wrapper>
  );
}

export default Header;
