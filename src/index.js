import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

class Form extends React.Component {
  checkValue(event) {
    let type = event.target.name;
    let val = event.target.value;
    //console.log('typed ' + val + ' as ' + type);
    this.props.data.checkValue(type, val, event)
  }

  render() {
    return (
      <li>
        <input type="email" name="mail" placeholder='Email'
          value={this.props.vocab}
          onChange={this.props.checkValue}
        />
        <p>{this.props.error}</p>
      </li>
    );
  }
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vocab: 'abc',
      message: null,
      position: null,
    }
  }
  
  // setState が undefined になるんでアロー関数
  checkValue = (event) => {
    let vocab = event.target.value;
    let message = null;
    let position = null;
    if (event.target.validationMessage) {
      message = event.target.validationMessage;
      position = false;
    } else {
      message = null;
      position = true;
    }
    this.setState({
      vocab: vocab,
      message: message,
      position: position,
    });

  }
  /*
  handleKey(e) {
    if (e === this.state.vocab[position]) {
      this.state.position += 1;
    }
  }
  */

  render() {
    let data = {
      vocab: this.state.vocab,
      error: this.state.message,
      checkValue: this.checkValue
    }
    return (
      /*
      <div className='App'>
        <div id='textbox'>
          <span className='typed-letters text'>
            {this.state.vocab.slice(0, this.state.position)}
          </span>
          <span> </span>
          <span>
            {this.state.vocab.slice(this.state.position)}
          </span>
        </div>
      </div>
      */
      <Form {...data} />
    );
  }
};

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
