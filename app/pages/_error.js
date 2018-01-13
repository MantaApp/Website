import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Message = styled.div`
`;


export default class Error extends React.Component {
  render() {
    return (
        <Wrapper>
        <Message>
          <h1>Sorry, nothing here!</h1>
          <p>The page you're looking for doesn't exist!</p>
        </Message>
      </Wrapper>
    )
  }
}