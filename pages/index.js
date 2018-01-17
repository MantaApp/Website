import React, { Component } from 'react'
import styled from 'styled-components'
import { ServerStyleSheet } from 'styled-components'
import Intro from '../components/Intro'
import Bubbles from '../components/Bubbles'

const Wrapper = styled.div`
  width: 100%;
  display:block;
`;

export default class Home extends Component {

  render(){
    return <Wrapper>
      <Intro />
      <Bubbles />
      </Wrapper>
  }

}

Home.defaultProps = {
  title: 'Overview'
}