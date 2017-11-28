// Libs
import React, {Component} from 'react';
import styled from 'styled-components';
import {getSiteProps} from 'react-static';
import {Head} from 'react-static';
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
    color: #F9D548;
  }
`;

const Caption = styled.p`
  margin-top: 20px;
  color: #B4B7BA;
  font-size: 90%;
`;

const VideoContainer = styled.div``;

const input1 = `
  The name of this project was inspired by the movie
  [Racing Extinction](http://racingextinction.com/).
  In this documentary film, there’s a graphic footage showing beautiful
  mantas being hunted in Lamakera - a central Indonesian village which used to
  be considered the world’s largest manta fishing site.

  Villagers here have conducted traditional manta hunts for many
  generations, but with the arrival of the gill-plate trade in the early
  2000’s, the community transformed to a full-scale commercial fishery,
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
  - Also, if you're working on an open source project and having a difficult time
  picking a name for it, consider my strategy.

Before you go, here's a beautiful video and music about Plankton.
`;

const input2 = `
  Some articles to learn more about plankton:
  - [Source of Half Earth’s Oxygen Gets Little Credit](https://news.nationalgeographic.com/news/2004/06/0607_040607_phytoplankton.html)
  - [Bottoms up: how whale poop helps feed the ocean](http://theconversation.com/bottoms-up-how-whale-poop-helps-feed-the-ocean-27913)
  - [Scientists want you to know plankton is not just whale food | Reuters](https://www.reuters.com/article/us-science-plankton/scientists-want-you-to-know-plankton-is-not-just-whale-food-idUSKBN0O62G120150522)
  - [How ocean plankton helps us breathing](https://thewildswimmingbrothers.com/features/how-ocean-plankton-helps-us-breathing)
`;

export default getSiteProps(() => (
  <Wrapper>
    <Head>
      <title>About - Manta App</title>
    </Head>
    <Content>
      <h1>About</h1>
      <SocialBtns/>
      <ReactMarkdown source={input1} />
      <Video videoId="f1JiJhWkM9M" height={450} width={800} />
      <Caption>
        2016 Oscar® nominated Best Original Song “MANTA RAY” written and
        performed by Academy Award® nominated composer J. RALPH and Academy
        Award® Nominated artist ANOHNI (F.K.A. ANTONY of Antony and the
        Johnsons) for the feature documentary “Racing Extinction” by Oscar
        winning director Louie Psihoyos (The Cove).{' '}
      </Caption>
      <ReactMarkdown source={input2} />
    </Content>
  </Wrapper>
));
