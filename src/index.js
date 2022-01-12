import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Vocab from './vocab.json';

class Form extends React.Component {
  render() {
    return (
      <li>
        <input
          value={
            this.props.vocab.slice(0, this.props.position) + ' ' +
            this.props.vocab.slice(this.props.position)
          }
          onChange={this.props.checkValue}
        />
        <p>{this.props.translate}</p>
      </li>
    );
  }
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vocab: Vocab[0].th,
      count: 0,
      translate: null,
      position: 0,
    }
  }

  getVocab = (count) => {
    let next_vocab = Vocab[count].th;
    return next_vocab;
  }
  
  // setState が undefined になるんでアロー関数
  checkValue = (event) => {
    let value = event.target.value;
    let c = value.charAt(value.length - 1);
    let vocab = this.state.vocab;
    //let message = null;
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
      vocab = this.getVocab(count);
      position = 0;
    }
    this.setState({
      vocab: vocab,
      count: count,
      //message: message,
      position: position,
    });
  }

  render() {
    let data = {
      vocab: this.state.vocab,
      position: this.state.position,
      translate: this.state.translate,
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
