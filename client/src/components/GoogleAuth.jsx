import React from 'react';
import {connect} from 'react-redux';

import {SignIn, SignOut} from '../actions';

class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null,
  }
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: "871407048984-4uut8i8hpks1ihuusr69r488q8mp2daq.apps.googleusercontent.com",
        scope: "email"
      }).then(()=> {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  };

  onAuthChange = (isSignedIn) => {
    if(isSignedIn) {
      this.props.SignIn();
    } else {
      this.props.SignOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  AuthBtn = () => {
    if(this.state.isSignedIn) {
      return <button className="btn btn-success" onClick={this.onSignOutClick}><i className="fa fa-google" style={{marginRight: 10}}></i> Sign out</button>
    } else {
      return <button className="btn btn-primary" onClick={this.onSignInClick}><i className="fa fa-google" style={{marginRight: 10}}></i>Sign in</button>
    }
  }

  render() {
    return (
      <div>
        {this.AuthBtn()}
      </div>
    )
  };
};

export default connect(null, {SignIn, SignOut})(GoogleAuth);