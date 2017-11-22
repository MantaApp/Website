// Libs
import React, {Component} from 'react';
import styled from 'styled-components';

// Images
import mainWindow from '../static/imgs/screenshots/mainWindow.png';
import bubblesSVG from '../static/imgs/bubbles.svg';
import fishesSVG from '../static/imgs/fishes.svg';

const Wrapper = styled.div`
  margin-top: 40px;
  background-image: url(${bubblesSVG}), url(${fishesSVG});
  background-position: center 25%, center 65%;
  background-repeat: repeat-x, no-repeat;
  text-align: center;
`;

const ButtonsGroup = styled.div`
  margin: 20px auto;
  button { margin: 0 5px }
`

const Screenshots = styled.div`
  padding: 0 20px;
  img {
    width: 100%;
    height: auto;
    max-width: 800px;
    display: block;
    clear: both;
    margin: 50px auto;
    box-shadow: 0 0 20px rgba(0,0,0,.2);
  }
`;


class Intro extends Component {
  render() {
    return (
      <Wrapper>
        <h1>Meet Manta</h1>
        <p className="lead">
          Painless invoicing with stunning customizable templates.
        </p>
        <ButtonsGroup>
          <a href="#" className="btn btn-lg btn-outline-light">
            Read Intro Article
          </a>
          {' '}
          <a href="https://github.com/hql287/Manta/releases"
            className="btn btn-lg btn-success">
            Download for macOS
          </a>
        </ButtonsGroup>
        <p className="text-muted">
          Download for{' '}
          <a href="https://github.com/hql287/Manta/releases" className="text-warning">
            Windows
          </a>.
        </p>
        <Screenshots>
          <img
            src={mainWindow}
            alt="mainWindow"
            className="mainWindowImg"
          />
        </Screenshots>
      </Wrapper>
    );
  }
}

export default Intro;
