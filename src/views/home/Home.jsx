import React from 'react';
import WrapperStoneForm from '../../components/stoneForm';
import 'antd/dist/antd.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>首页</h1>
        </header>
        <WrapperStoneForm />
      </div>
    );
  }
}

export default Home;
