import React, { Component } from 'react';
import axios from 'axios';
import ProductCard from '../Containers/ProductCard';
import '../scss/App.scss';


class App extends Component {
  componentDidMount() {
    const { setProducts } = this.props;
    axios
      .get("/products.json")
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { products, isReady } = this.props;

    return (
      <div className="App">
        
        {!isReady
          ? 'Loading...' :
          products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))
        }
      </div>
    );
  }
}

export default App;
