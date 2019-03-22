import React, { Component } from 'react';
import { connect } from 'react-redux';
class Profile extends Component {
  
  render() {

    return (
      <div>
        <h1>Profile</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <img src={this.props.profile.picture} alt='profile' />
            </div>
            <div className="col-md-8 text-center">
              <h1>{this.props.profile.name}</h1>
              <h1>{this.props.profile.nickname}</h1>
              <h1>{this.props.profile.locale}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer
  }
}
export default connect(mapStateToProps)(Profile);