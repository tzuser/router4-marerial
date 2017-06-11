import React,{Component} from 'react';

import Full from '../Components/Full';
import Home from 'bundle-loader?lazy&name=[name]!./Home';
import User from 'bundle-loader?lazy&name=[name]!./User';
import Clinic from 'bundle-loader?lazy&name=[name]!./Clinic';

import Header from '../Components/Header';
import LeftMenu from '../Components/LeftMenu';
import {Route,Redirect,Link} from 'react-router-dom';
import Bundle from './Bundle';
import PropTypes from 'prop-types'; 

import {grey50} from 'material-ui/styles/colors'
class Frames extends Component{
	constructor(props) {
		super(props);
	}
	state={
		tabData:null,//菜单数据
	}
	getChildContext(){
		return {setTopTab:this.setTopTab.bind(this)}
	}
	setTopTab(data){
		console.log(data)
		//this.setState({tabData:data})
	}
	render() {
		console.log('tz')
		let muiTheme=this.context.muiTheme;
		let match=this.props.match;
		console.log(this.state.tabData)
		return(
		<Full>
		 	<Header title="固生堂医生工作站" {...this.props} tabData={this.state.tabData} />
		 	<LeftMenu {...this.props}/>
	 		<Full style={styles.frame}>
	 			<Full >
	 				<div style={{height:112}}></div>
					<Route exact path="/app" render={() => (<Redirect to={`${match.url}/clinic`} />)}/>
					<Route path={`${match.url}/clinic`} component={Bundle(Clinic)} />
					<Route path={`${match.url}/home`} component={Bundle(Home)} />
					<Route path={`${match.url}/user`} component={Bundle(User)} />
				</Full>
			</Full>
		</Full>
		)
	}
}


const styles={
	frame:{
		paddingLeft:256,
		position:'relative',
		backgroundColor:grey50,
	},

}
Frames.childContextTypes={
	setTopTab:PropTypes.func
}

Frames.contextTypes={
	muiTheme:PropTypes.object.isRequired
} 
export default Frames;