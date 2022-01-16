/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export default class Play extends React.Component {
  constructor(props) {
    super(props);
    this.keepFocus = React.createRef(); // Focus on input by ref
  }
  render() {
    return (
      <div css={[wrapper, background]}>
        <input css={hideForm} autoFocus //<- Focus on rendering.
          value={
            this.props.vocab.slice(0, this.props.position) + ' ' +
            this.props.vocab.slice(this.props.position)
          }
          ref={this.keepFocus}
          onChange={this.props.checkValue}
          onBlur={() => {
            this.keepFocus.current.focus();
          }}
        />
        <div css={textbox}>
          <span css={[text, typed]}>
            {this.props.vocab.slice(0, this.props.position)}
          </span>
          <span> </span>
          <span css={[text, waiting]}>
            {this.props.vocab.slice(this.props.position)}
          </span>
        </div>
        <div>
          <p>{this.props.translation}</p>
        </div>
      </div>
    )
  };
};

const background = css`
    background: white;
`

const typed = css`
    color: black;
`

const waiting = css`
    color: #aaaaaa;
`

const hideForm = css`
    color: transparent;
    background: transparent;
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
    text-align: center;
`