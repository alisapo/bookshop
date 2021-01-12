import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './scss/index.scss';

import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';

import CartComponent from './Containers/Cart';
import Order from './Containers/Order';
import ProductPage from './Containers/ProductPage';

import Categories from './Containers/Filter';
import Header from "./Containers/Header";
import App from './Containers/App';

import store from './Store';

const storeS = store();
const history = syncHistoryWithStore(createBrowserHistory(), storeS);



ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeS}>
      <Router history={history}>
        <Header />
        <Categories />
        <Route path='/' exact component={App} />
        <Switch>
          <Route path='/product/:id' exact component={ProductPage} />
          <Route path='/cart' exact component={CartComponent} />
          <Route path='/order' exact component={Order} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);