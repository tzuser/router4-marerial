import React,{Component} from 'react';
import {Paper,FlatButton,RaisedButton,Divider} from 'material-ui';
import List from '../Components/List.jsx';
import {Tabs,Tab} from 'material-ui/Tabs';
import {grey900} from 'material-ui/styles/colors';
import AttrIcon from '../Components/AttrIcon';
import DatePickerBtn from '../Components/DatePickerBtn';
import PropTypes from 'prop-types'; 

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as configAct from '../actions/config.js';
import {Route,Redirect} from 'react-router-dom'

import UnknowPatient from './UnknowPatient';
import SimpleClinic from './SimpleClinic';
import AdmittedPatient from './AdmittedPatient';
class Clinic extends Component{
	componentDidMount() {
		//注册tab数据
		let {match}=this.props;
		this.props.setTopTabsAct(
			[{name:"未诊病人",url:`${match.url}/unknow`},
			{name:"已诊病人",url:`${match.url}/admitted`},
			{name:"简易门诊",url:`${match.url}/simple`}])
	}
	componentWillUnmount() {
		//清空tab
		this.props.setTopTabsAct(null)
	}
	render() {
		let {location,match}=this.props;
		return (
				<div style={{padding:"20px 40px",}}>
					<div style={styles.tool}>
						<div></div>
						<div>
							<DatePickerBtn />
						</div>
					</div>
					<Divider />
					<Route exact path={`${match.url}`} render={() => (<Redirect to={`${match.url}/unknow`} />)}/>
					<Route path={`${match.url}/unknow`} component={UnknowPatient} />
					<Route path={`${match.url}/admitted`} component={AdmittedPatient} />
					<Route path={`${match.url}/simple`} component={SimpleClinic} />
				</div>
			)
	}
}

const styles={
	tool:{
		display:"flex",
		alignItems:"center",
		justifyContent:"space-between",
		height:50
	},
	tabs:{
		color:grey900,
	},
	tab:{
		paddingLeft:30,
		paddingRight:10
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
export default connect(mapStateToProps, mapDispatchToProps)(Clinic)