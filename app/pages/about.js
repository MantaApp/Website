import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

import Video from '../components/Video';
import ReactMarkdown from 'react-markdown';
import SocialBtns from '../components/SocialBtns';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 25px;
  div {
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 30px;
  h1 {
    margin-bottom: 25px;
  }
  > span {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
    border: 10px solid black;
    background: black;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  a {
    color: #f9d548;
  }
`;

const Note = styled.p`
  margin-top: 20px;
  color: #b4b7ba;
  font-size: 90%;
  padding: 0 40px;
`;

const input1 = `
  The name of this project was inspired by the movie
  [Racing Extinction](http://racingextinction.com/).
  In this documentary film, there’s a graphic footage showing beautiful
  mantas being hunted in Lamakera - a central Indonesian village which used to
  be considered the world’s largest manta fishing site.
  Villagers here have conducted traditional manta hunts for many
  generations, but with the emergencence of the gill-plate trade in the early
  2000’s, the community changed to a full-scale commercial fishery,
  landing over a thousand mantas in a single season and sending
  the manta population into a downward spiral.
  According to [IUCN](http://www.iucnredlist.org/details/195459/0) and
  [other sources](https://en.wikipedia.org/wiki/List_of_threatened_rays),
  Manta Ray is either a vulnerable or endangered species at the moment.
  The harsh truth is, Manta is only 1 of many species that are being affected
  by human activities everyday. My hope was to use this project to raise people's
  awareness on these environmental issues.
  I encourage you do some of the followings:
  - Watch the movie Racing Extinction and check out [its website](http://racingextinction.com/).
  - Visit conservationists's websites such as [Oceanic Preservation Society](http://www.opsociety.org/),
    [International Union for Conservation of Nature](https://www.iucn.org/) to
    learn more about their works and donate if you can.
  - Share this page to let more people know about these issues.
Also, if you're working on an open source project and having a difficult time
  picking a name for it, please do consider this naming strategy.
`;

export default class About extends Component {
   render(){
    return <Layout title={this.props.title}> 
      <Wrapper>
        <Content>
          <h1>About</h1>
          <SocialBtns />
          <Video videoId="9FttNi9-S1E" height={450} width={800} />
          <Note>
            Original song “ONE CANDLE” written and performed by Academy Award®
            nominated composer J. RALPH and SIA for the feature documentary “Racing
            Extinction” by Oscar winning director Louie Psihoyos (The Cove).
            Co-Produced by Arthur Pingrey Ⓒ Ⓟ 2015 Rumor Mill Records.
          </Note>
          <ReactMarkdown source={input1} />
          <Note>
            This product is not sponsored by or affiliated with any organization
            mentioned above. All information used in the app by default is for demo
            purpose only. All content, product, and company names are trademarks™ or
            registered® trademarks of their respective holders.
          </Note>
        </Content>
        <hr />
      </Wrapper>
    </Layout>
  }

}

About.defaultProps = {
  title: 'About'
}