/** @jsxImportSource @emotion/react */
import React from 'react';
//import {css, keyframes} from '@emotion/react'
import Start from './start'
import Play from './play'
import Result from './result'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      window: 'start',
      data: {
        typeCount: 0,
        missCount: 0,
        typeTime: 0,
        //cpm: 0,
        accuracy: 0,
      }
    }
  }

  startGame = () => {
    this.setState({
      window: 'play'
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
        //cpm: resultData.cpm,
        accuracy: resultData.accuracy,
      }
    })
  }

  render() {
    const current_window = this.state.window;
    if (current_window === 'start') {
      return (<Start startGame={this.startGame} />)
    } else if (current_window === 'play') {
      return (<Play setResult={this.getData}/>)
    } else if (current_window === 'result') {
      const resultData = this.state.data;
      return (<Result data={resultData} startGame={this.resetGame}/>)
    }
  }
};