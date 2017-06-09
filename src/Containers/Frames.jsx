import React from 'react';

import Full from '../Components/Full';

import Home from 'bundle-loader?lazy&name=[name]!./Home';
import User from 'bundle-loader?lazy&name=[name]!./User';
import Clinic from 'bundle-loader?lazy&name=[name]!./Clinic';
import {Route,Redirect,Link} from 'react-router-dom';
import Bundle from './Bundle';
import PropTypes from 'prop-types'; 

import {AppBar,Drawer,Divider,makeSelectable,List,ListItem,Paper,FlatButton} from 'material-ui';

let SelectableList = makeSelectable(List);


const Frames=({match,history,location},{muiTheme})=>{
	const menuData=[
	{name:"门诊",url:`${match.url}/clinic`},
	{name:"档案",url:`${match.url}/home`},
	{name:"统计",url:`${match.url}/user`},
	{name:"设置",url:`${match.url}/tz`}
	];
	const menuIndex=menuData.findIndex((item)=>{
		return location.pathname.indexOf(item.url)!=-1
	})
	return(
	<Full>
	 	<Drawer open={true} zDepth={1} >
	 		<img src="./static/images/logo.png" />
	 		<Divider />
	 		<SelectableList value={menuIndex}>
		 		{menuData.map((item,key)=>(
		 			<ListItem key={key} 
		 			primaryText={item.name} 
		 			onTouchTap={()=>{history.push(item.url)}}
		 			value={key}
		 			/>
		 		))}
	 		</SelectableList>
	 	</Drawer>
 		<Full style={styles.frame}>
 			<AppBar titleStyle={muiTheme.appBarTitle} style={styles.nav} title="固生堂挂号缴费系统 - 广州海珠分院" iconElementRight={<FlatButton label="退出系统" />} iconElementLeft={<i/>}   />
 			<Full style={styles.content}>
 				<div style={styles.outer}>
 					<Route exact path="/app" render={() => (<Redirect to={`${match.url}/clinic`} />)}/>
					<Route path={`${match.url}/clinic`} component={Bundle(Clinic)} />
					<Route path={`${match.url}/home`} component={Bundle(Home)} />
					<Route path={`${match.url}/user`} component={Bundle(User)} />
				</div>
			</Full>
		</Full>
	</Full>
	)
}

const styles={
	frame:{
		paddingLeft:256,
		position:'relative',
	},
	nav:{
		position:'fixed',
		width:'auto',
		left:0,
		right:0,
	},
	content:{
		backgroundColor:"#fafafa",
	},
	outer:{
		
		paddingTop:64,
	}
}

Frames.contextTypes={
	muiTheme:PropTypes.object.isRequired
} 
export default Frames;