import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {unregister} from './registerServiceWorker'; //change this line at the beginning
import {Provider} from 'react-redux'; //used to provide the store to the app
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
unregister(); //make sure to include this each time.
