/** @jsxImportSource @emotion/react */
import React from 'react';
import {css, keyframes} from '@emotion/react'
import Vocab from '../vocab.json'

import Play from './play'

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vocab: Vocab[16].th,
      count: 16,
      translation: Vocab[0].en,
      position: 0,
      typeCount: 0,
      missCount: 0,
      startTime: 0,
    };
  }

  componentDidMount() {
    this.setState({startTime: Date.now()/*new Date()*/})
  }

  getVocab = (count) => {
    const next = {
      vocab: Vocab[count].th,
      translation: Vocab[count].en,
    };
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

  finish = () => {
    const finishTime = Date.now();
    const missCount = this.state.missCount;
    const typeTime = finishTime - this.state.startTime;
    console.log(typeTime, missCount);
    this.props.setResult();
  }

  // Since state is assumed to be undefined, use the arrow function
  checkValue = (event) => {
    const value = event.target.value;
    const c = value.charAt(value.length - 1); // inputted char
    let vocab = this.state.vocab;
    let translation = this.state.translation;
    let position = this.state.position;
    let count = this.state.count;
    let missCount = this.state.missCount;

    if (c === vocab[position]) {
      console.log("correct")
      position += 1;
    } else {
      this.cssMistake();
      missCount += 1;
      console.log("incorrct")
    }
    if (vocab.length === position) {
      if (count === Vocab.length - 1) {
        this.finish();
        return false;
      }
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
      missCount: missCount,
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
        <Play {...data} />uu
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