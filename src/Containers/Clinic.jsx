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
import Casec from './Casec';//看诊
import Queue from './Queue';//排队

class Clinic extends Component{
	render() {
		let {location,match}=this.props;
		return (
				<div>
					<Route exact path={`${match.url}`} render={() => (<Redirect to={`${match.url}/queue`} />)}/>
					<Route path={`${match.url}/queue`} component={Queue} />
					<Route path={`${match.url}/casec`} component={Casec} />
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