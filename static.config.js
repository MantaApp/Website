// Libs
import React, {Component} from 'react';
import {ServerStyleSheet} from 'styled-components';

export default {
  // Site Props
  getSiteProps: () => ({
    title: 'React Static',
  }),
  // Site Routes
  getRoutes: () => [
    {
      path: '/',
      component: 'src/containers/Home',
    },
    {
      path: '/features',
      component: 'src/containers/Features',
    },
    {
      path: '/about',
      component: 'src/containers/About',
    },
    {
      is404: true,
      component: 'src/containers/404',
    },
  ],
  // Render
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    meta.styleTags = sheet.getStyleElement();
    return html;
  },
  Document: class CustomHtml extends Component {
    render() {
      const {Html, Head, Body, children, renderMeta} = this.props;
      return (
        <Html>
          <Head>
            <title>Manta App</title>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
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
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  }
};
