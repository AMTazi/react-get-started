import React, {Component} from 'react';


  class Clock extends Component {
    constructor (props) {
      super(props)
      this.state = {
        date:new Date()
      }

      this.tick = this.tick.bind(this)
    }

    tick () {

      this.setState({
        date:new Date()
      })

    }

    componentDidMount() {
      this.timerId = setInterval(this.tick,1000) ;
    }

    componentWillUnmount() {
      clearInterval(this.timerId)
    }

    render () {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

export default Clock;
