import React,{Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as configAct from '../actions/config.js';
class User extends Component {
	componentDidMount() {
		//注册tab数据
		this.props.setTopTabsAct(
			[{name:"病历",url:'/'},
			{name:"中药饮片",url:'/'},
			{name:"中西成药",url:'/'},
			{name:"检验检查",url:'/'},
			{name:"治疗理疗",url:'/'},
			{name:"其他汇总",url:'/'}])		
	}
	componentWillUnmount() {
		//清空tab
		this.props.setTopTabsAct(null)
	}
	render() {
		return (<div>统计</div>)
	}
}
const mapStateToProps=({config})=>{
    return {
    	
    }
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
    	setTopTabsAct:configAct.setTopTabs
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(User);