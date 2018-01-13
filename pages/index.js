import React, { Component } from 'react'
import styled from 'styled-components'
import { ServerStyleSheet } from 'styled-components'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import Bubbles from '../components/Bubbles'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`
export default class Home extends Component {

  render(){
    return <Layout title={this.props.title}>
      <Intro />
      <Bubbles />
    </Layout>

  }

}

Home.defaultProps = {
  title: 'Overview'
}