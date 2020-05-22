// App.js
import React, { Component } from 'react';
import './App.css';
import Game from './Game.js';
import Score from './Score.js';

class App extends Component {
  
  state = {
    numQuestions: 0,
    numCorrect: 0,
  };

handleAnswer = answerWasCorrect => {
    // this form doesn't require us to bind 'this' in constructor
    this.setState(currState => ({
      numQuestions: currState.numQuestions + 1,
      numCorrect: answerWasCorrect? currState.numCorrect + 1 : currState.numCorrect
    }));
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Game handleAnswer={this.handleAnswer} />
          <Score
            numQuestions={this.state.numQuestions}
            numCorrect={this.state.numCorrect}
          />
        </div>
      </div>
    );
  }
}


export default App;
