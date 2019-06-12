import createPage from './template';

function decorator(target) {
  target.prototype.symbol = '测试';
}
console.log(createPage);
export default createPage(decorator);
