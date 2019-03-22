import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Secret from './Components/Secret';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
import Callback from './Components/Callback';
import Profile from './Pages/Profile';
import { connect } from 'react-redux';
import * as actions from './actions/index';
import jwtDecode from 'jwt-decode';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ModalPage from './Pages/ModalPage';
class App extends Component {


	componentDidMount() {
		const idToken = JSON.parse(localStorage.getItem('idToken')) || false;
		if (idToken) {
			this.props.getProfile(jwtDecode(idToken));
		}
	}

	render() {
		//const isAuth = this.props.auth.isAuthenticated();		
		return (
			<BrowserRouter>
			<div className="App">
				<Navbar {...this.props} />
				{/* {elm} */}
				<Switch>
				<Route path="/callback" exact component={Callback} />
				<Route path="/" exact component={Home} />
				<Route path="/profile" exact component={Profile} />
				<Route path="/secret" exact render={(props) => <Secret {...props} />} />
				<Route path="/create-task" exact component={ModalPage} />
				<Route path="/edit-task/:id" exact render={(props) => <ModalPage {...props} />} />
				<Route path="/" component={NotFound} />
				</Switch>
			</div>
		
			</BrowserRouter>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getProfile: (profile) => {
			dispatch(actions.getProfile(profile));
		}
	}
}

export default connect(null, mapDispatchToProps)(App);
