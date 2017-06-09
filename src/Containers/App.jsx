import React from 'react';
import Full from '../Components/Full.jsx';
import Frames from './Frames';
import {Route,Redirect,Link} from 'react-router-dom';
import Bundle from './Bundle';

import {teal600,teal700,teal800} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const muiTheme=getMuiTheme({
	palette:{
		primary1Color:teal600,
		primary2Color:teal700,
		primary3Color:teal800,
	},
	appBarTitle:{//导航标题
    	fontSize:18,
    	marginLeft:256+72,
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