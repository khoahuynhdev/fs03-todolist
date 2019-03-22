import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Secret from './Components/Secret';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
import Callback from './Components/Callback';
class App extends Component {


	render() {
		const isAuthenticated = this.props.auth.isAuthenticated();
		let elm;
		switch (this.props.location) {
			case '':
				elm = <Home  />
				break;
			case 'secret':
				elm = isAuthenticated ? <Secret /> : <NotFound />
				break;
			case 'callback':
				elm = <Callback />
				break;	
			default:
				elm = <NotFound />
				break;
		}
		return (
			<div className="App">
				<Navbar {...this.props} />
				{elm}
			</div>
		);
	}
}

export default App;
