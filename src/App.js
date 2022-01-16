/** @jsxImportSource @emotion/react */
import React from 'react';
//import {css, keyframes} from '@emotion/react'
import Start from './components/start'
import Game from './components/game'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      window: 'start',
    }
  }
  render() {
    const current_window = this.state.window;
    if (current_window === 'start') {
      return (<Start />)
    } else if (current_window === 'game') {
      return (<Game />)
    }
  }
};