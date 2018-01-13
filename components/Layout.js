import React, { Component } from 'react'
import Head from 'next/head'
import { ServerStyleSheet } from 'styled-components'
import styled, {injectGlobal} from 'styled-components';
import Header from '../components/Header';

injectGlobal`
  html, body {
    height: 100%;
  }
  #root {
    height: 100vh;
  }
`;

const Copyrights = styled.p`
  margin-bottom: 50px;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  color: #C4C8CC;
  a {
    color: #F9D548;
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


export default class Layout extends Component {
  renderNoscript() {
    return {
      __html: `
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JF3TD7" height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `,
    };
  }

  createGTMScript() {
    const gtmScript = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5JF3TD7');
    `;
    return {__html: gtmScript};
  }

  render () {
    return (
      <div>
        <Head>
          <title>{this.props.title} - Manta App </title>
          <meta property="og:url" content="https://manta.life" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Manta App" />
            <meta
              property="og:description"
              content="A desktop application for creating invoices with beautiful and customizable templates"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta property="og:image" content="static/imgs/manta-app-logo.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="static/imgs/favicons/favicon-16x16.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="static/imgs/favicons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="static/imgs/favicons/favicon-96x96.png"/>
          <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"
              integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb"
              crossOrigin="anonymous"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Titillium+Web:300,600&amp;subset=latin-ext"
              rel="stylesheet"
              type="text/css"
            />
            <script dangerouslySetInnerHTML={this.createGTMScript()} />
        </Head>
          <Wrapper>
            <Header />
             {this.props.children}
            <Copyrights>
              All rights reserved &copy; 2017. Contact <a href="mailto:hi@manta.life">hi@manta.life</a>
            </Copyrights>
          </Wrapper>
          <noscript dangerouslySetInnerHTML={this.renderNoscript()} />
      </div>
    )
  }
}


Layout.defaultProps = {
  title : 'Overview',
}