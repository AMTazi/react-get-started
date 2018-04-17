import React, {Component} from 'react';


class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name,last,e) {
    console.log(e,name,last);
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this,'naimo','tazi')}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle;
