import React from 'react'
import styled from 'styled-components';
import Layout from '../components/Layout'
import Bubbles from '../components/Bubbles'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height:100vh
`;

const Message = styled.div`
`;


export default class Error extends React.Component {

  render() {
    return <Layout title={this.props.title}>
    <Wrapper>
        <Message>
          <h1>Sorry, nothing here!</h1>
          <p>The page you're looking for doesn't exist!</p>
        </Message>
        <Bubbles />
    </Wrapper>
  </Layout>
  }
}

Error.defaultProps = {
  title: 'Not Found'
}