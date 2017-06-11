import React from 'react';
import Full from '../Components/Full.jsx';
import Frames from './Frames';
import {Route,Redirect,Link} from 'react-router-dom';
import Bundle from './Bundle';

import {indigo500,pink400,orange1000} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const muiTheme=getMuiTheme({
	palette:{
		primary1Color:indigo500,
		primary2Color:pink400,
		primary3Color:orange1000,
	},
	appBarTitle:{//导航标题
    	fontSize:18,
    	marginLeft:20,
    	backgroundColor:"none"
  	},
})
const App=()=>(
	<MuiThemeProvider muiTheme={muiTheme} >
		<Full>
			<Route exact path="/" render={() => (<Redirect to="/app"/>)}/>
			<Route path="/app" component={Frames} />
		</Full>
	</MuiThemeProvider>
)
export default App;