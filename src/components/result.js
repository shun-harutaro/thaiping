/** @jsxImportSource @emotion/react */
import React from 'react';
import {css, keyframes} from '@emotion/react'
import { Button } from '@mui/material';
export default class Start extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div css={body}>
        <div css={wrapper}>
          <p>result window</p>
          <div css={ul_center}>
          <ul css={ul}>
            <li>time: {this.props.data.typeTime}</li>
            <li>word count: {this.props.data.typeCount}</li>
            <li>miss: {this.props.data.missCount}</li>
            <li>accuracy: {this.props.data.accuracy}%</li>
          </ul>
          </div>
          <Button 
            onClick={this.props.startGame}
            variant='contained'>
              one more
          </Button>
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
  list-style: none;
  background: white;
  width: 50%;
  text-align: center;
`
const ul_center = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const ul = css`
  list-style: none;
  padding: 0;
`