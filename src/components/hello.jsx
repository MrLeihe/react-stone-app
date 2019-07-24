import React from 'react'
import Hoc from './hoc'

class HelloView extends React.Component {

    callback() {
        console.log('callback')
    }

    render() {
        return <div>hello world！</div>
    }
}

export default Hoc(HelloView)