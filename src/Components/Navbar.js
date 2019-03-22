import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    }
  }

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('idToken')) || "";
    if (idToken) {
      console.log(jwtDecode(idToken));
      this.setState({ profile: jwtDecode(idToken) });
    }
  }


  render() {

    const isAuth = this.props.auth.isAuthenticated();
    if (isAuth) {
      this.props.getProfile(this.state.profile);
    }
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <a className="navbar-brand" href="/">Todo-List</a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/">{isAuth ? <img src={this.state.profile.picture} alt='profile' width="30" height="30" /> : ''}<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/profile">{isAuth ? this.state.profile.given_name : 'guest'}<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="/">Action 1</a>
                  <a className="dropdown-item" href="/">Action 2</a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              <button type="button" className={`btn btn-default${isAuth ? ' d-none' : ''}`} onClick={this.props.auth.login}>Login</button>
              <button type="button" className={`btn btn-default${isAuth ? '' : ' d-none'} `} onClick={this.props.auth.logout}>Logout</button>
            </form>

          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: (profile) => {
      dispatch(actions.getProfile(profile))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);