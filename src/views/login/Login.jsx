import createPage from '../template/common.jsx';
import { InputNumber } from 'antd';

function decorator(target) {
  target.prototype.title = 'login';
  target.prototype.otherView = InputNumber;
  target.prototype.scheme = 'https'
  target.prototype.host = 'stone'
}

export default createPage(decorator);
