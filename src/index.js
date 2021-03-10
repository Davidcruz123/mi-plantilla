import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/navbar.css'
import './style/home.css'

// import {Flux} from './store/context'

import Layout from './layout'




ReactDOM.render(
  <React.StrictMode>
  
  <Layout />
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

