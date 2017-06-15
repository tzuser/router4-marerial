import React,{Component} from 'react';
import Full from '../Components/Full.jsx';
import Frames from './Frames';

import {HashRouter as Router,Route,Link} from 'react-router-dom';
import Bundle from './Bundle';


import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getThement from '../tools/getThement';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class App extends Component{
	render() {
		let muiTheme=getMuiTheme(getThement({
			fontSizeBase:this.props.fontSizeBase,
			color:this.props.color
		}));
		return (
			<MuiThemeProvider muiTheme={muiTheme} >
				<Router>
					<Full>
						<Route exact path="/" render={() => (<Redirect to="/app"/>)}/>
						<Route path="/app" component={Frames} />
					</Full>
				</Router>
			</MuiThemeProvider>
		)
	}
}
const mapStateToProps=({config})=>{
    return {
    	fontSizeBase:config.fontSizeBase,
    	color:config.color
    }
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({

    },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);