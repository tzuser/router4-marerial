import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Content from '../Components/Content';
import PropTypes from 'prop-types'; 

import {grey50} from 'material-ui/styles/colors';
import * as configAct from '../actions/config'; 
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {Paper,Toggle,Subheader,Divider,List,ListItem,Checkbox,Slider} from 'material-ui';
class Setup extends Component{
	constructor(props) {
		super(props);
	}
	setFontSizeBase(size){
		this.props.setFontSizeBase(parseInt(size));
	}
	render() {
		let muiTheme=this.context.muiTheme;
		let match=this.props.match;
		let {fontSizeBase}=this.props;
		return(
		<Content>
		 	<div style={styles.row}>
			 	<Paper style={styles.container}>
				 	<List>
				 		<Subheader>字体大小</Subheader>
				 		<Slider  value={parseInt(fontSizeBase)/6} step={0.2} onChange={(e,v)=>this.setFontSizeBase(v*6)} style={styles.slider} />
				 		<Divider />
				 		<ListItem primaryText="自动叫诊"  rightToggle={<Toggle />} style={muiTheme.listItem}/>
				 		<Divider />
					 	<Subheader>默认展示项</Subheader>
				 	 	<ListItem primaryText="既往史"  rightToggle={<Toggle />} style={muiTheme.listItem}/>
				 	 	<ListItem primaryText="家族史"  rightToggle={<Toggle />} style={muiTheme.listItem}/>
				 	 	<ListItem primaryText="经带待产史"  rightToggle={<Toggle />} style={muiTheme.listItem}/>
				 	 	<ListItem primaryText="体格检查"  rightToggle={<Toggle />} style={muiTheme.listItem}/>
				 	 	<ListItem primaryText="辅助检查"  rightToggle={<Toggle />} style={muiTheme.listItem}/>
				 	 	<Divider />
				 	 	<Subheader>复诊患者初始病历类型</Subheader>
						<ListItem primaryText="引用空白病历"  leftCheckbox={<Checkbox />} style={muiTheme.listItem}/>
						<ListItem primaryText="引用最近就诊病历"  leftCheckbox={<Checkbox />} style={muiTheme.listItem}/>
				 	</List>
			 	</Paper>
		 	</div>	
		</Content>
		)
	}
}

const styles={
	radioButton:{
		marginTop:10,
		marginBottom:10,
	},
	container:{
		maxWidth:400,
	},
	slider:{
		marginLeft:20,marginRight:20
	}
}

Setup.contextTypes={
	muiTheme:PropTypes.object.isRequired
} 

const mapStateToProps=({config})=>{
    return {
    	fontSizeBase:config.fontSizeBase
    }
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
    	setFontSizeBase:configAct.setFontSizeBase
    },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Setup)