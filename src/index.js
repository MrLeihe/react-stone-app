import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { LocaleProvider } from 'antd'
import { Provider } from 'mobx-react'
import Store from './store/index'
import App from './App';
import './index.css';

// 数据状态响应
const store = new Store()

ReactDOM.render(
  <HashRouter>
    <LocaleProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LocaleProvider>
  </HashRouter>,
  document.getElementById('root')
);
