import React from 'react';
import 'antd/dist/antd.css';
import './home.css'
import HelloView from '../../components/hello'
import Axios from 'axios';

class Home extends React.Component {

  constructor() {
    super()
    this.callRef = React.createRef()
    console.log('callRef', this.callRef)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.spawn(this.gen.bind(this))
    this.test()
  }

  sendRequest() {
    return new Promise((resolve, reject) => {
      Axios.post('http://127.0.0.1:4000/').then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  testAsync() {
    return new Promise((resolve, reject) => {
      reject('fail')
    })
  }

  async test() {
    try {
      const result = await this.testAsync()
    } catch (err) {
      console.error(err)
    }
  }

  gen = function* () {
    // generarot函数
    // *相当于async， yeild 相当于 await
    // console
    console.log('gen---->', this)
    const res1 = yield this.sendRequest()
    console.log(res1)
  }

  // generaror执行函数
  spawn(genF) {
    return new Promise(function (resolve, reject) {
      var gen = genF();
      function step(nextF) {
        try {
          var next = nextF();
        } catch (e) {
          return reject(e);
        }
        if (next.done) {
          return resolve(next.value);
        }
        Promise.resolve(next.value).then(function (v) {
          step(function () { return gen.next(v); });
        }, function (e) {
          step(function () { return gen.throw(e); });
        });
      }
      step(function () { return gen.next(undefined); });
    });
  }

  timeOut() {
    return 'stone'
  }

  handleClick() {
    console.log(this.callRef.current)
  }

  render() {
    return (
      <div>
        <header>
          <h1>首页</h1>
        </header>
        <main>
          <div>首页content</div>
        </main>
        <section className='square-container'>
          <div className='top square'></div>
          <div className='bottom square'></div>
        </section>
        <section>
          <span>image element</span>
          <img src='https://tutorialzine.com/media/2016/08/bicycle.jpg' alt='自行车'></img>
        </section>
        <section>
          <span>background element</span>
          <div className='bg'></div>
        </section>
        <h1>pony</h1>
        <span>stone</span>
        <button onClick={this.handleClick}>ref</button>

        <HelloView />

      </div>
    );
  }
}

export default Home;
