import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const products = [
  {
    name: 'Ipad',
    price: 200
  },
  {
    name: 'iPhone',
    price: 650
  }
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentWillMount() {
    this.getProducts();
  }

  getProducts() {
    const products = JSON.parse(localStorage.getItem('products'));
    this.setState({ products });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Products Manager</h1>

        {
          this.state.products.map(product => {
            return (
              <div key={product.name}>
                <span>{product.name}</span> 
                { ' | ' }
                <span>{product.price}</span> 
                { ' | ' }
                <button>Delete</button>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;