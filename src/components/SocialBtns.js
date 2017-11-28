// Libs
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`text-align: center;`;

function SocialBtns() {
  return (
    <Wrapper>
      <div
        className="fb-like"
        data-href="https://manta.life/"
        data-layout="button_count"
        data-action="like"
        data-size="large"
        data-show-faces="false"
        data-share="true"
      />
    </Wrapper>
  );
}

export default SocialBtns;
