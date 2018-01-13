// Libs
import React, {Component} from 'react';
import YouTube from 'react-youtube';

class Video extends Component {
  _onReady(event) {
    event.target.pauseVideo();
  }
  render() {
    const { width, height } = this.props;
    const opts = {
      frameborder: '0',
      allowfullscreen: true,
      playerVars: {
        autoplay: 0,
      },
    };
    return (
      <YouTube
        opts={opts}
        videoId={this.props.videoId}
        onReady={this._onReady}
      />
    );
  }
}

export default Video;