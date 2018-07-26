import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css' //no ./ so that it default looks in node-modules
import 'normalize.css/normalize.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
