import React from "react";
import Game from './components/game';
import ButtonAppBar from "./components/ButtonAppBar";
import { GlobalStyles } from '@mui/material';
import { css } from '@emotion/react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />
        <ButtonAppBar />
        <Game />
        </div>
      </div>
    )
  }
}
