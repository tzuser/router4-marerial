import React,{Component} from 'react';
import {Paper,FlatButton,DatePicker} from 'material-ui';
import List from '../Components/List.jsx';
import {Tabs,Tab} from 'material-ui/Tabs';
import {grey900} from 'material-ui/styles/colors';
import AttrIcon from '../Components/AttrIcon';
import PropTypes from 'prop-types'; 
class Clinic extends Component{
	constructor(props) {
		super(props);
		console.log('a')
	}
	componentWillMount() {
		
		console.log('b')
	}
	componentDidMount() {
		const data=[//tab数据
		{name:"未诊病人"},
		{name:"已诊病人"},
		{name:"简易门诊"}];
		this.context.setTopTab(data)
		console.log('d')
	}
	render() {
		console.log('c')
		let {location,match}=this.props;
		return (
				<div style={{padding:"20px 40px",}}>
					<FlatButton label="医生屏显链接"  />
					<AttrIcon icon="i-date" style={{marginLeft:20,color:"#666"}} />
					<DatePicker
					
					hintText="选择日期" 
					style={{marginLeft:10}}  
					inputStyle={{width:120}} 
					fullWidth={true} 
					container="inline" 
					/>
					<List />
				</div>
			)
	}
}
Clinic.contextTypes={
	setTopTab:PropTypes.func
}

const styles={
	tool:{
		display:"flex",
		alignItems:"center",
		justifyContent:"space-between",
		paddingLeft:40,
		paddingRight:40,
		backgroundColor:"rgb(63, 81, 181)"
	},
	toolRight:{
		display:"flex",
		alignItems:"center",
	},
	tabs:{
		color:grey900,
	},
	tab:{
		paddingLeft:30,
		paddingRight:10
	}
}
export default Clinic;