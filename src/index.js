import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {unregister} from './registerServiceWorker'; //change this line.

ReactDOM.render(<App />, document.getElementById('root'));
unregister(); //make sure to include this each time.
