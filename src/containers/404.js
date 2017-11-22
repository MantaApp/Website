// Libs
import React from 'react';
import styled from 'styled-components';
import Bubbles from '../components/Bubbles';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Message = styled.div`

`;

export default () => (
  <Wrapper>
    <Message>
      <h1>Sorry, nothing here!</h1>
      <p>The page you're looking for doesn't exist!</p>
    </Message>
    <Bubbles />
  </Wrapper>
);
