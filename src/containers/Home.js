// Libs
import React, {Component} from 'react';
import styled from 'styled-components';
import {getSiteProps} from 'react-static';
import { Head } from 'react-static';

// Components
import Intro from '../components/Intro';
import Bubbles from '../components/Bubbles';

const Wrapper = styled.div`
  width: 100%;
`;

export default getSiteProps(() => (
  <Wrapper>
    <Head>
      <title>Overview - Manta App</title>
    </Head>
    <Intro />
    <Bubbles />
  </Wrapper>
));
