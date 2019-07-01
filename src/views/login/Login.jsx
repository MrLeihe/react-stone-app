import createPage from '../template/common.jsx';
import { InputNumber } from 'antd';

function decorator(target) {
  target.prototype.title = 'login';
  target.prototype.otherView = InputNumber;
  target.prototype.scheme = 'http'
}

export default createPage(decorator);
