import React from 'react';
import WrapperStoneForm from '../../components/stoneForm';
import 'antd/dist/antd.css';
import './home.css'
import defaultItem from '../../utils/module'
import { default as defaultItem2 } from '../../utils/module'
import _, { default as defaultItem3 } from '../../utils/module'

console.log(defaultItem, defaultItem2)
console.log(defaultItem === defaultItem2)
console.log(_)

class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>首页</h1>
        </header>
        <WrapperStoneForm />
        <main>
          <div>首页content</div>
        </main>
        <section>
          <span>stone</span>
          <span>pony</span>
        </section>
        <section className='square-container'>
          <div className='top square'></div>
          <div className='bottom square'></div>
        </section>
        <section>
          <span>image element</span>
          <img src='https://tutorialzine.com/media/2016/08/bicycle.jpg'></img>
        </section>
        <section>
          <span>background element</span>
          <div className='bg'></div>
        </section>
      </div>
    );
  }
}

export default Home;
