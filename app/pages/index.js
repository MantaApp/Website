import React, { Component } from 'react'
import styled from 'styled-components'
import { ServerStyleSheet } from 'styled-components'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`
export default class Home extends Component {

  render(){
    return <Title>My page</Title>
  }

}