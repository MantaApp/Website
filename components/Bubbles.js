// Libs
import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';

// Animation
const shake = keyframes`
  0% { transform: translateX(10px); }
  50% { transform: translateX(-10px); }
  100% { transform: translateX(10px); }
`;

const rise = keyframes`
  0% {
    bottom: 0;
    opacity: 0;
  }
  5% {
    bottom: 0;
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    bottom: 100%;
    opacity: 0;
  }
`;

// Elements
const BubblesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  pointer-events: none;
`;

const BubbleWrapper = styled.div`
  animation: ${rise} 4s cubic-bezier(0.47, 0, 0.745, 0.715) 0s infinite;
  position: absolute;
  opacity: 0;
  bottom: 0;
  will-change: transform;
`;

const Bubble = styled.div`
  width: 6px;
  height: 6px;
  margin: 0 auto;
  border-radius: 100%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.25);
  will-change: transform;
  animation: ${shake} 3s infinite linear;
`;

class Bubbles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min_size: 5,
      max_size: 15,
      min_count: 6,
      max_count: 8,
      isMobile: false,
    };
  }

  componentDidMount() {
    let isMobile = typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1;
    this.setState({ isMobile });
  }

  bubbles() {
    let bubbles = [];
    // Calculate a random number of bubbles
    let bubbleCount =
      this.state.min_count +
      Math.floor(Math.random() * (this.state.max_count + 1));
    // Creating bubbles
    for (let i = 0; i < bubbleCount; i++) {
      // Position
      let pos = Math.floor(Math.random() * 101);
      // Size
      let size =
        this.state.min_size +
        Math.floor(Math.random() * (this.state.max_size + 1));
      // Delay
      let delay = Math.floor(Math.random() * 4);
      // Speed
      let speed = 3 + Math.floor(Math.random() * 10);
      // Blur
      let blur = Math.floor(Math.random() * 3);
      // Push to bubbles array
      bubbles.push(
        <BubbleWrapper
          key={`${pos}-${size}-${delay}-${speed}-${blur}-bubble`}
          style={{
            left: pos + '%',
            WebkitAnimationDuration: speed + 's',
            animationDuration: speed + 's',
            WebkitAnimationDelay: delay + 's',
            animationDelay: delay + 's',
            WebkitFilter: 'blur(' + blur + 'px)',
            filter: 'blur(' + blur + 'px)',
          }}>
          <Bubble
            style={{
              width: size + 'px',
              height: size + 'px',
            }}
          />
        </BubbleWrapper>,
      );
    }
    return bubbles;
  }

  render() {
    return this.state.isMobile ? null : (
      <BubblesContainer>{this.bubbles()}</BubblesContainer>
    );
  }
}

export default Bubbles;