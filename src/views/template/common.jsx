import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

function createPage(decorator) {
  @decorator
  class Common extends React.Component {
    render() {
      const OtherView = this.otherView;
      return (
        <div>
          <header>
            <Button type="primary">{this.title}</Button>
            <OtherView />
          </header>
        </div>
      );
    }
  }
  return Common;
}

export default createPage;
