import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

class Form extends React.Component {
  /*
  checkValue(event) {
    let type = event.target.name;
    let val = event.target.value;
    //console.log('typed ' + val + ' as ' + type);
    this.props.data.checkValue(type, val, event)
  }
  */

  render() {
    return (
      <li>
        <input type="email" name="mail" placeholder='Email'
          value={
            this.props.vocab.slice(0, this.props.position) + ' ' +
            this.props.vocab.slice(this.props.position)
          }
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
      vocab: 'เดิน',
      message: null,
      position: 0,
    }
  }
  
  // setState が undefined になるんでアロー関数
  checkValue = (event) => {
    let value = event.target.value;
    let c = value.charAt(value.length - 1);
    let vocab = this.state.vocab;
    let message = null;
    let position = this.state.position;
    console.log(vocab, value, c);
    
    if (c === vocab[position]) {
      console.log("correct")
      position += 1;
    } else {
      console.log("incorrct")
    }

    this.setState({
      vocab: vocab,
      message: message,
      position: position,
    });
  }

  render() {
    let data = {
      vocab: this.state.vocab,
      position: this.state.position,
      error: this.state.message,
      checkValue: this.checkValue
    }
    return (
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
