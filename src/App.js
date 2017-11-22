import React from 'react';
import {Router, Link} from 'react-static';
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

const App = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  min-height: 100%;
  background: #4c3f73;
  color: white;
  font-family: 'Titillium Web', sans-serif;
  background: -webkit-linear-gradient(
    to top,
    #4c3f73,
    #6c5b7b,
    #355c7d
  );
  background: linear-gradient(
    to top,
    #4c3f73,
    #6c5b7b,
    #355c7d
  );
`;

export default () => (
  <Router>
    <App>
      <Header/>
      <Routes/>
    </App>
  </Router>
);
