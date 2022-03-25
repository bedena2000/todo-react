import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";
import TodoInfo from "./context/Context";

import App from './App';


ReactDOM.render(
  <TodoInfo>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TodoInfo>,
  document.getElementById('root')
);

