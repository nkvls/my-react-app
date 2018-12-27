import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import FormControls from  './FormControls';
import MemeApp from './MemeApp';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<FormControls />, document.getElementById('root'));
ReactDOM.render(<MemeApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
