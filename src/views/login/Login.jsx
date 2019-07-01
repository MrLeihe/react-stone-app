import createPage from '../template/common.jsx';
import { InputNumber } from 'antd';

function decorator(target) {
  target.prototype.title = 'login';
  target.prototype.otherView = InputNumber;
  target.prototype.scheme = 'https'
  target.prototype.host = 'pony'
}
<<<<<<< HEAD
console.log('我是pony4')
=======
console.log('我是pony3')
>>>>>>> pony3

export default createPage(decorator);
