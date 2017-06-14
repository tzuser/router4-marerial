import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Content from '../Components/Content';
import PropTypes from 'prop-types'; 

import {grey50} from 'material-ui/styles/colors';
import * as configAct from '../actions/config'; 
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {Paper,Toggle} from 'material-ui';
class Setup extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		let muiTheme=this.context.muiTheme;
		let match=this.props.match;
		return(
		<Content>
		 	<h1>设置</h1>
		 	<div style={{display:'flex'}}>
			 	<Paper>
			 		字体大小
				 	<div>
					 	<RadioButtonGroup defaultSelected="small" name="shipSpeed">
					 		 <RadioButton
						        value="small"
						        label="小"
						        style={styles.radioButton}
						      />
						      <RadioButton
						        value="medium"
						        label="中"
						        style={styles.radioButton}
						      />
						      <RadioButton
						        value="big"
						        label="大"
						        style={styles.radioButton}
						      />
					 	</RadioButtonGroup>
					 	<Toggle
					 	     label="加粗"
					 	     defaultToggled={false}
					 	     style={styles.toggle}
					 	   />
				 	</div>
			 	</Paper>

			 	<Paper>
			 		看诊设置
				 	<div>
					 	<RadioButtonGroup defaultSelected="small" name="shipSpeed">
					 		 <RadioButton
						        value="small"
						        label="手动叫诊"
						        style={styles.radioButton}
						      />
						      <RadioButton
						        value="medium"
						        label="自动叫诊"
						        style={styles.radioButton}
						      />
					 	</RadioButtonGroup>
				 	</div>
			 	</Paper>

			 	<Paper>
			 		病历设置
				 	<div>
				 	



				 		<Toggle
							label="既往史"
							defaultToggled={false}
							style={styles.toggle}
					 	/>
					 	<Toggle
							label="家族史"
							defaultToggled={false}
							style={styles.toggle}
					 	/>
					 	<Toggle
							label="经带待产史"
							defaultToggled={false}
							style={styles.toggle}
					 	/>
					 	<Toggle
							label="体格检查"
							defaultToggled={false}
							style={styles.toggle}
					 	/>
					 	<Toggle
							label="辅助检查"
							defaultToggled={false}
							style={styles.toggle}
					 	/>
					 	<RadioButtonGroup defaultSelected="small" name="shipSpeed">
					 		 <RadioButton
						        value="small"
						        label="引用空白病历"
						        style={styles.radioButton}
						      />
						      <RadioButton
						        value="medium"
						        label="引用最近就诊病历"
						        style={styles.radioButton}
						      />
					 	</RadioButtonGroup>
				 	</div>
			 	</Paper>
		 	</div>
		</Content>
		)
	}
}


const styles={
	radioButton:{
		margin:10,
	}
}

Setup.contextTypes={
	muiTheme:PropTypes.object.isRequired
} 

const mapStateToProps=({config})=>{
    return {

    }
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({

    },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Setup)