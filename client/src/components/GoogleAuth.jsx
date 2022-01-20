import React from 'react';
import {connect} from 'react-redux';

import {signIn, signOut} from '../actions';
import Spinner from '../components/Spinner';


class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: "871407048984-4uut8i8hpks1ihuusr69r488q8mp2daq.apps.googleusercontent.com",
        scope: "email"
      }).then(()=> {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  };

  onAuthChange = (isSignedIn) => {
    if(isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
    console.log(this.auth);
  }

  AuthBtn = () => {
    if(this.props.isSignedIn === null) {
      return <Spinner />
    }
    else if(this.props.isSignedIn) {
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

const mapStateToProps = (state) => {
  console.log(state);
  return {isSignedIn: state.authStatus.isSignedIn}
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);