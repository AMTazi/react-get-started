import React, {Component} from 'react';

function UserGreeting(props) {
  return (
    <h1>Welcome back dude</h1>
  );
}

function GuestGreeting(props) {
  return (
    <h1>Welcome aboard</h1>
  )
}
function SwitchAuthentication({onClick,authenticated}) {
  return (
    <button onClick={onClick.bind(this)}>
      {(authenticated) ?  'Logout' : 'Login'}
    </button>
  );
}

function Greeting ({authenticated}) {


  return (
    <div>
      {(authenticated) ? <UserGreeting /> : <GuestGreeting />}
    </div>
  );

}

class LoginController extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated:false
    }
    this.handleAuthenticationClick = this.handleAuthenticationClick.bind(this)
  }

  handleAuthenticationClick () {
    this.setState({
      authenticated:!this.state.authenticated
    })
  }

  render() {

    return (
      <div>
        <SwitchAuthentication onClick={this.handleAuthenticationClick} authenticated={this.state.authenticated}/>
        <br/>
        <Greeting authenticated={this.state.authenticated} />
      </div>
    );

  }
}


export default LoginController;
