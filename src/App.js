import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';

class App extends Component {
  state = {
    siteTitle: 'This is our site title',
    products: [
      {
        id: 1,
        name: 'First product',
        desc: 'This is product description'
      },
      {
        id: 2,
        name: 'Second product',
        desc: 'This is product description'
      },
      {
        id: 3,
        name: 'Third product',
        desc: 'This is product description'
      },
    ]
  }
  
  render() {
    return (
      <div>
        <Header/>
        {console.log(this.state.products)}
        <h2>{ this.state.siteTitle }</h2>

        <h3>Products</h3>
        {
          this.state.products.map((product) => (
            <li key={product.id}>Id: {product.id}, Name: {product.name}</li>
          ))
        }
      </div>
    )
  }
}

export default App;