import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ProductItem from './ProductItem.js'

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
      products: JSON.parse(localStorage.getItem('products'))
    };

    this.onDelete = this.onDelete.bind(this);
  }

  componentWillMount() {
    const products = this.getProducts();

    this.setState({ products });
  }

  getProducts() {
    return this.state.products;
  }

  onDelete(name) {
    const products = this.getProducts();

    const filteredProducts = products.filter(products => {
      return products.name !== name;
    });

    this.setState({ products: filteredProducts });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Products Manager</h1>
        </header>

        {
          this.state.products.map(product => {
            return (
              <ProductItem
                key={product.name}
                {...product}
                onDelete = {this.onDelete}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;