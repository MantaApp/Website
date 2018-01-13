import Document, { Head, Main, NextScript } from 'next/document'
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


export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    const title = 'Overview - Manta App';
    return { ...page, styleTags, title }
  }

  renderNoscript() {
    return {
      __html: `
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JF3TD7" height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `,
    };
  }

  render () {
    return (
      <html>
        <Head>
          <title>{this.props.title}</title>
          <meta property="og:url" content="https://manta.life" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Manta App" />
            <meta
              property="og:description"
              content="A desktop application for creating invoices with beautiful and customizable templates"
            />
            <meta property="og:image" content="static/imgs/manta-app-logo.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="static/imgs/favicons/favicon-16x16.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="static/imgs/favicons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="static/imgs/favicons/favicon-96x96.png"/>
          {this.props.styleTags}
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossOrigin="anonymous"/>
          <link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,600&amp;subset=latin-ext" rel="stylesheet" type="text/css"/>
         
        </Head>
        <body>
          <Wrapper>
            <Header />
            <Main />
            <Copyrights>
              All rights reserved &copy; 2017. Contact <a href="mailto:hi@manta.life">hi@manta.life</a>
            </Copyrights>
          </Wrapper>
          <NextScript />
          <noscript dangerouslySetInnerHTML={this.renderNoscript()} />
        </body>
      </html>
    )
  }
}
