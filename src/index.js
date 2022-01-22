import { GlobalStyles } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import ButtonAppBar from './components/ButtonAppBar';
import reportWebVitals from './reportWebVitals';
//import { type } from '@testing-library/user-event/dist/type';

ReactDOM.render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />
    <ButtonAppBar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
