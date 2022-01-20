/** @jsxImportSource @emotion/react */
import React from 'react';
import {css, keyframes} from '@emotion/react'

export default class Start extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div css={body}>
        <div css={wrapper}>
          <p>result window</p>
          <button onClick={this.props.startGame}>one more</button>
        </div>
      </div>
    )
  }
};

const body = css`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgray;
`

const wrapper = css`
  background: white;
  width: 50%;
  text-align: center;
`
