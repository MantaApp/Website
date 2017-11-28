import React, {Component} from 'react';
import {Head, Router, Link} from 'react-static';
import styled, {injectGlobal} from 'styled-components';
import Routes from 'react-static-routes';
import Header from './components/Header';

injectGlobal`
  html, body {
    height: 100%;
  }
  #root {
    height: 100vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 50px;
  min-height: 100%;
  background: #4c3f73;
  color: white;
  font-family: 'Titillium Web', sans-serif;
  background: -webkit-linear-gradient(to top, #4c3f73, #6c5b7b, #355c7d);
  background: linear-gradient(to top, #4c3f73, #6c5b7b, #355c7d);
`;

import LogoImg from './static/imgs/manta-illustration.png';

class App extends Component {
  renderNoscript() {
    return {
      __html: `
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JF3TD7" height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `,
    };
  }
  render() {
    return (
      <Router>
        <Wrapper>
          <Head>
            <meta property="og:url" content="https://manta.life" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Manta App" />
            <meta
              property="og:description"
              content="A desktop application for creating invoices with beautiful and customizable templates"
            />
            <meta property="og:image" content={LogoImg} />
          </Head>
          <noscript dangerouslySetInnerHTML={this.renderNoscript()} />
          <Header />
          <Routes />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
