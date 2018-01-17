// Libs
import React, {Component} from 'react';
import styled from 'styled-components';
import SocialBtns from './SocialBtns';
import Link from 'next/link'
import platform from 'platform';


const Wrapper = styled.div`
  margin-top: 40px;
  padding: 0 20px;
  background-image: url('/static/imgs/bubbles.svg'), url('/static/imgs/fishes.svg');
  background-position: center 25%, center 65%;
  background-repeat: repeat-x, no-repeat;
  text-align: center;
  min-height: 100%;
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

  static getInitialProps({ res, req }) {
    console.log(res)
    return this.props;
  }

  componentDidMount() { 
    let osName='unknown';
    const osInfo = platform.os.family;
    if (osInfo.includes('Mac')) osName = 'macOS';
    if (osInfo.includes('Win')) osName = 'Windows';
    if (osInfo.includes('Linux')) osName = 'Linux';
    this.setState({
      osName
    });

    this.setState({
      osName
    });
  }

  setDownloadBtn(){

    // Todo
    // https://api.github.com/repos/hql287/Manta/releases?per_page=100

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
        Download for Linux
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
          
        <Link href="https://github.com/hql287/Manta" > 
            <a className="btn btn-lg btn-outline-light">
            View Project on GitHub 
            </a>
        </Link>
          
        </ButtonsGroup>
        <p className="text-muted">
          <Link href="/about">
            <a className="text-warning">
            Why do you name this app Manta?
            </a>
          </Link>
        </p>
        <SocialBtns />
        <Screenshots>
          <img src={'static/imgs/screenshots/mainWindow.png'} alt="mainWindow" className="mainWindowImg" />
        </Screenshots>
      </Wrapper>
    );
  }
}

export default Intro;