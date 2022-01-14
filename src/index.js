/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom';
import { css } from '@emotion/react'
import './index.css';
//import './App.css'
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Vocab from './vocab.json';
import { type } from '@testing-library/user-event/dist/type';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.keepFocus = React.createRef(); // String attribute is deprecated
  }
  render() {
    return (
      <div className='wrapper' css={wrapper}>
      <div className='form'>
        <input css={hideForm} autoFocus //<- Focus on rendering.
          value={
            this.props.vocab.slice(0, this.props.position) + ' ' +
            this.props.vocab.slice(this.props.position)
          }
          ref={this.keepFocus}
          onChange={this.props.checkValue}
          onBlur={() => {
            ReactDOM.findDOMNode(this.keepFocus.current).focus();
          }}
        />
      </div>
      <div className='text'>
        <div css={textbox}>
          <span css={[text, typed]}>
            {this.props.vocab.slice(0, this.props.position)}
          </span>
          <span> </span>
          <span css={[text, waiting]}>
            {this.props.vocab.slice(this.props.position)}
          </span>
        </div>
      </div>
      <div className='translation'>
        <p>{this.props.translation}</p>
      </div>
      </div>
    );
  }
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vocab: Vocab[0].th,
      count: 0,
      translation: Vocab[0].en,
      position: 0,
    }
  }

  getVocab = (count) => {
    const next = new Object();
    next.vocab = Vocab[count].th;
    next.translation = Vocab[count].en;
    return next;
  }
  
  // setState が undefined になるんでアロー関数
  checkValue = (event) => {
    let value = event.target.value;
    let c = value.charAt(value.length - 1);
    let vocab = this.state.vocab;
    let translation = this.state.translation;
    let position = this.state.position;
    let count = this.state.count;
    
    if (c === vocab[position]) {
      console.log("correct")
      position += 1;
    } else {
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
    let data = {
      vocab: this.state.vocab,
      position: this.state.position,
      translation: this.state.translation,
      checkValue: this.checkValue
    }
    return (
      <div css={body}>
        <Form {...data} />
      </div>
    );
  }
};

const body = css`
  min-height: 100vh;
  background: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`

const typed = css`
  color: black;
`

const waiting = css`
  color: #aaaaaa;
`

const hideForm = css`
  color: white;
  border: none;
  &:focus {
    outline: none;
  }
`

const textbox = css`
  padding: 1rem;
`

const text = css`
  font-size: 100px;
  display: inline;
`

const wrapper = css`
  width: 50%;
  background: white;
  text-align: center;
`


ReactDOM.render(
  /*
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  */
  <Game />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

