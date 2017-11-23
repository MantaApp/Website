// Libs
import React, {Component} from 'react';
import styled from 'styled-components';
import {getSiteProps} from 'react-static';
import { Head } from 'react-static';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default getSiteProps(() => (
  <Wrapper>
    <Head>
      <title>About - Manta App</title>
    </Head>
    <h1>About</h1>
  </Wrapper>
));
