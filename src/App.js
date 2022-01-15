/** @jsxImportSource @emotion/react */
import React from 'react';
import {css, keyframes} from '@emotion/react'
import Vocab from './vocab.json'

import Play from './components/play'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vocab: Vocab[0].th,
      count: 0,
      translation: Vocab[0].en,
      position: 0,
    };
  }

  getVocab = (count) => {
    let next = new Object();
    next.vocab = Vocab[count].th;
    next.translation = Vocab[count].en;
    return next; // Return two values as an object
  }

  cssMistake = () => {
    background = css`
      animation: ${miss}, 0.5s;
      animation-fill-mode: forwards;
    `
    setTimeout(() => {
      background = css`
        background: lightgray;
      `
    }, 1);
  }

  // Since state is assumed to be undefined, use the arrow function
  checkValue = (event) => {
    const value = event.target.value;
    const c = value.charAt(value.length - 1); // inputted char
    let vocab = this.state.vocab;
    let translation = this.state.translation;
    let position = this.state.position;
    let count = this.state.count;

    if (c === vocab[position]) {
      console.log("correct")
      position += 1;
    } else {
      this.cssMistake();
      console.log("incorrct")
    }
    if (vocab.length === position) {
      count += 1;
      const next = this.getVocab(count);
      vocab = next.vocab;
      translation = next.translation
      position = 0;
    }
    this.setState({
      vocab: vocab,
      count: count,
      translation: translation,
      position: position,
    });
  }

  render() {
    const data = {
      vocab: this.state.vocab,
      position: this.state.position,
      translation: this.state.translation,
      checkValue: this.checkValue,
    }
    return (
      <div css={[body, background]}>
        <Play {...data} />
      </div>
    )
  }
};

const body = css`
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const miss = keyframes`
  100% {
    background: #f003;
  }
`

let background = css`
  background: lightgray;
`