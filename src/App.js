/** @jsxImportSource @emotion/react */
import React from 'react';
//import {css, keyframes} from '@emotion/react'
import Start from './components/start'
import Game from './components/game'
import Result from './components/result'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      window: 'start',
      data: {
        typeCount: 0,
        missCount: 0,
        typeTime: 0,
      }
    }
  }

  startGame = () => {
    this.setState({
      window: 'game'
    })
  }

  resetGame = () => {
    this.setState({
      window: 'start'
    })
  }

  getData = (resultData) => {
    this.setState({
      window: 'result',
      data: {
        typeCount: resultData.typeCount,
        missCount: resultData.missCount,
        typeTime: resultData.typeTime,
      }
    })
  }

  render() {
    const current_window = this.state.window;
    if (current_window === 'start') {
      return (<Start startGame={this.startGame} />)
    } else if (current_window === 'game') {
      return (<Game setResult={this.getData}/>)
    } else if (current_window === 'result') {
      const resultData = this.state.data;
      return (<Result data={resultData} startGame={this.resetGame}/>)
    }
  }
};