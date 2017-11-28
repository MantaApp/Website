// Libs
import React, {Component} from 'react';
import styled from 'styled-components';
import SocialBtns from '../components/SocialBtns';

// Images
import mainWindow from '../static/imgs/screenshots/mainWindow.png';
import bubblesSVG from '../static/imgs/bubbles.svg';
import fishesSVG from '../static/imgs/fishes.svg';

const Wrapper = styled.div`
  margin-top: 40px;
  padding: 0 20px;
  background-image: url(${bubblesSVG}), url(${fishesSVG});
  background-position: center 25%, center 65%;
  background-repeat: repeat-x, no-repeat;
  text-align: center;
`;

const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  a { margin: 0 10px 10px 10px }

  @media (max-width: 700px) {
    flex-direction: column;
  }
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
          <a href="https://github.com/hql287/Manta/releases"
            className="btn btn-lg btn-success">
            Download for macOS
          </a>
          <a href="#" className="btn btn-lg btn-outline-light">
            Read Intro Article
          </a>
        </ButtonsGroup>
        <p className="text-muted">
          Download for{' '}
          <a href="https://github.com/hql287/Manta/releases" className="text-warning">
            Windows
          </a>.
        </p>
        <SocialBtns/>
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
