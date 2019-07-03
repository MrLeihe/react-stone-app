import React from 'react';
import moment from 'moment'
import './App.css';
import 'antd/dist/antd.css';
import { withRouter } from 'react-router-dom';
import Routes from './router/routes'


class App extends React.Component {
  constructor(props) {
    super(props);
    props.history.listen(location => {
      console.log(location.pathname);
      switch (('pathname:', location.pathname)) {
        case '/':
          document.title = '首页';
          break;
        case '/login':
          document.title = '登录';
          break;
        default:
          break;
      }
    });
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <main>
          <Routes />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
