import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    
    let title = 'This is Haekal\'s App';
    const item = [
      'Item 1',
      'Item 2',
      'Item 3'
    ]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{title}</h1>
        </header>
        <p className="App-intro">
          {
            item.map(item => {
              return (
                <div key={item} onMouseEnter={this.onMouseEnter}>
                  {item}
                </div>
              )
            })
          }
          <input onChange={this.onChange}/>

        </p>
      </div>
    );
  }
}

export default App;