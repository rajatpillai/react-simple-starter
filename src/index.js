import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import routes from './router';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <BrowserRouter>
    {routes}
  </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
