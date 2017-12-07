// Libs
import React, {Component} from 'react';
import styled from 'styled-components';
import SocialBtns from '../components/SocialBtns';
import {Link} from 'react-static';

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
  a {
    margin: 0 10px 10px 10px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Screenshots = styled.div`
  padding: 0 20px;
  img {
    width: 100%;
    height: auto;
    max-width: 800px;
    display: block;
    clear: both;
    margin: 50px auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
`;

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = { osName: 'macOS' };
    this.setDownloadBtn = this.setDownloadBtn.bind(this);
  }

  componenDidMount() {
    let osName = 'unknown';
    const osInfo = window.navigator.appVersion;
    if (osInfo.includes('Mac')) osName = 'macOS';
    if (osInfo.includes('Win')) osName = 'Windows';
    if (osInfo.includes('Linux')) osName = 'Linux';
    this.setState({
      osName
    });
  }

  setDownloadBtn() {
    const macBtn = (
      <a
        className="btn btn-lg btn-success"
        href="https://github.com/hql287/Manta/releases/download/v1.0.0/Manta-1.0.0.dmg">
        Download for Mac
      </a>
    );
    const winBtn = (
      <a
        className="btn btn-lg btn-success"
        href="https://github.com/hql287/Manta/releases/download/v1.0.0/Manta-Setup-1.0.0.exe">
        Download for Windows
      </a>
    );
    const linuxBtn = (
      <a
        className="btn btn-lg btn-success"
        href="https://github.com/hql287/Manta/releases/download/v1.0.0/Manta_1.0.0_amd64.deb">
        Download for Windows
      </a>
    );
    switch (this.state.osName) {
      case 'Windows': {
        return winBtn;
      }
      case 'Linux': {
        return linuxBtn;
      }
      default: {
        return macBtn;
      }
    }
  }

  render() {
    return (
      <Wrapper>
        <h1>Meet Manta</h1>
        <p className="lead">
          Painless invoicing with stunning customizable templates.
        </p>
        <ButtonsGroup>
          {this.setDownloadBtn()}
          <a
            href="https://github.com/hql287/Manta/releases"
            className="btn btn-lg btn-outline-light">
            Download for other OS
          </a>
        </ButtonsGroup>
        <p className="text-muted">
          <Link to="/about" className="text-warning">
            Why do you name this app Manta?
          </Link>
        </p>
        <SocialBtns />
        <Screenshots>
          <img src={mainWindow} alt="mainWindow" className="mainWindowImg" />
        </Screenshots>
      </Wrapper>
    );
  }
}

export default Intro;
