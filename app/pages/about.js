import Document from 'next/document'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default class About extends Document {
  static getInitialProps () {
    const title = 'sdfds';
    return { title }
  }
  render(){
    return <Title>My page</Title>
  }

}