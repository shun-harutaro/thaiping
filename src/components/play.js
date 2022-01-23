/** @jsxImportSource @emotion/react */
import React from 'react';
import {css, keyframes} from '@emotion/react'
import Vocab from '../vocab.json'
import Type from './type'

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vocab: Vocab[0].th,
      count: 0,
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

  ms2min(msTime) {
    const min = Math.floor(msTime / 60000);
    const mm = ('00' + min).slice(-2);
    const ms = ('0000' + (msTime % 60000)).slice(-5);
    const formatTime = `${mm}:${ms.slice(0,2)}.${ms.slice(2,5)}`
    return formatTime;
  }

  /*
  calcCPM(typeCount, msTime) {
    const s = Math.floor(msTime / 100);
    const keyBySec = Math.floor(typeCount / s);
    console.log(keyBySec * 60)
    return keyBySec * 60;
  }
  */

  calcAccuracy(type, miss) {
    const correct = type - miss;
    const rate = Math.floor(correct / type * 100);
    return rate;
  }

  finish = () => {
    const finishTime = Date.now();
    const typeCount = this.state.typeCount;
    const missCount = this.state.missCount;
    const typeTime = finishTime - this.state.startTime;
    const formatTime = this.ms2min(typeTime);
    //const cpm = this.calcCPM(typeCount, typeTime);
    const accuracy = this.calcAccuracy(typeCount, missCount) + '%';
    const resultData = {
      typeTime: formatTime,
      typeCount: typeCount,
      missCount: missCount,
      //cpm: cpm,
      accuracy: accuracy,
    }
    //console.log(typeTime, missCount);
    this.props.setResult(resultData);
  }

  // Since state is assumed to be undefined, use the arrow function
  checkValue = (event) => {
    const value = event.target.value;
    const c = value.charAt(value.length - 1); // inputted char
    let vocab = this.state.vocab;
    let translation = this.state.translation;
    let position = this.state.position;
    let count = this.state.count;
    let typeCount = this.state.typeCount + 1;
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
      typeCount: typeCount,
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
        <Type {...data} />
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