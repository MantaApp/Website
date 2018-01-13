import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

const StyledLink = styled.a`
    text-transform:uppercase;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 600;
    color:#fff;

`

export default ({ href, children }) => (
  <Link prefetch href={href} passHref>
    <StyledLink>{children}</StyledLink>
  </Link>
)