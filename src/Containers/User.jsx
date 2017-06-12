import React,{Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as configAct from '../actions/config.js';
class User extends Component {
	componentWillMount() {
		//注册tab数据
		this.props.setTopTabsAct(
			[{name:"未诊病人"},
			{name:"测试"}])
	}
	componentWillUnmount() {
		//清空tab
		this.props.setTopTabsAct(null)
	}
	render() {
		return (<div><RaisedButton label="aaaa" /> This is User    
	<DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" />   
	<TimePicker hintText="12hr Format" /></div>)
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