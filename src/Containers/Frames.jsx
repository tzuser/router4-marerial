import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Full from '../Components/Full';
import Home from './Home';
import User from './User';
/*import Home from 'bundle-loader?lazy&name=[name]!./Home';
import User from 'bundle-loader?lazy&name=[name]!./User';*/
import Clinic from './Clinic';

import Header from '../Components/Header';
import LeftMenu from '../Components/LeftMenu';
import {Route,Redirect,Link} from 'react-router-dom';
import Bundle from './Bundle';
import PropTypes from 'prop-types'; 

import {grey50} from 'material-ui/styles/colors';
import * as configAct from '../actions/config'; 
class Frames extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		let muiTheme=this.context.muiTheme;
		let match=this.props.match;
		let topHeight=64;//头部高度
		let tabData=this.props.tabData;//头部导航数据
		let navOpen=this.props.navOpen;//左边导航是否打开
		styles.frame.paddingLeft=navOpen?256:0;
		if(tabData && tabData.length>0){
			topHeight=112;
		}
		return(
		<Full>
		 	<Header 
		 	{...this.props} 
		 	title="固生堂医生工作站-广州海珠分院" 
		 	tabData={tabData} 
		 	height={topHeight} 
		 	onLeftIconButtonTouchTap={()=>{this.props.navOpenAct(!navOpen)}} />
		 	<LeftMenu {...this.props} topHeight={topHeight} open={navOpen}/>
	 		<Full style={styles.frame}>
	 			<Full >
	 				<div style={{height:topHeight,transition: "height 0.4s"}}></div>
					<Route exact path="/app" render={() => (<Redirect to={`${match.url}/clinic`} />)}/>
					<Route path={`${match.url}/clinic`} component={Clinic} />
					<Route path={`${match.url}/home`} component={Home} />
					<Route path={`${match.url}/user`} component={User} />
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
		transition: "padding 0.4s"
	},

}

Frames.contextTypes={
	muiTheme:PropTypes.object.isRequired
} 

const mapStateToProps=({config})=>{
    return {
    	tabData:config.tabData,
    	navOpen:config.navOpen
    }
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
    	navOpenAct:configAct.openNav
    },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Frames)