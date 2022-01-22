/** @jsxImportSource @emotion/react */
import React from 'react';
import {css, keyframes} from '@emotion/react'
import Button from '@mui/material/Button'

export default class Start extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div css={body}>
        <div css={wrapper}>
          <p>start window</p>
          <Button 
            variant="contained"
            onClick={this.props.startGame}>
              start
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
  background: white;
  width: 50%;
  text-align: center;
`
