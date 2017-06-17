import React,{Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as configAct from '../actions/config.js';
import {green700} from 'material-ui/styles/colors';
import {Field,reduxForm,Form } from 'redux-form';

class Casec extends Component {
	componentDidMount() {
		//注册tab数据
		this.props.setTopTabsAct(
			[{name:"病历",url:'/app/clinic/casec'},
			{name:"中药饮片",url:'/'},
			{name:"中西成药",url:'/'},
			{name:"检验检查",url:'/'},
			{name:"治疗理疗",url:'/'},
			{name:"其他汇总",url:'/'}]);
		this.props.setColor(green700);
	}
	componentWillUnmount() {
		//清空tab
		//this.props.setTopTabsAct(null)
		//this.props.setColor(null)
	}

	render() {

		return (
			<div>
			<Form onSubmit={(e)=>{console.log(e)}}>
				<Field name="email" component="input" type="email" />
			</Form >
			看诊中
			</div>)
	}
}

const mapStateToProps=({casec})=>{
    return {
    	initialValues:casec.form
    }
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
    	setTopTabsAct:configAct.setTopTabs,
    	setColor:configAct.setColor,
    },dispatch)
}

Casec=reduxForm({
	form:'casec',
})(Casec);

export default connect(mapStateToProps, mapDispatchToProps)(Casec);