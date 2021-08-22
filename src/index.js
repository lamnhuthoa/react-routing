import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
//Cấu hình redux
import {Provider} from 'react-redux';
import {store} from './redux/Reducer/configStore'
//Import css antd
import 'antd/dist/antd.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
