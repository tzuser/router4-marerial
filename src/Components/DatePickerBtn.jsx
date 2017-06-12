import React,{Component} from 'react';
import {DatePicker,RaisedButton} from 'material-ui';
class DatePickerBtn extends Component {

	state={
		dateStr:this.getDateStr(new Date()),
	}
	selectDate(){
		this.refs.datePicker.focus();
	}
	formatDate(e,date){
		let dateStr=this.getDateStr(date);
		this.setState({'dateStr':dateStr})
	}
	getDateStr(date){
		let dateStr=date.toLocaleString();
		return dateStr.split(' ')[0];
	}
	render() {
		return (
			<span style={{position:"relative"}}>
				<DatePicker 
					hintText="选择日期" 
					onChange={this.formatDate.bind(this)} 
					ref="datePicker" 
					style={styles.input}  
					container="inline" 
					autoOk={true} 
					fullWidth={true}/>
				<RaisedButton 
					onTouchTap={this.selectDate.bind(this)} 
					label={this.state.dateStr}   
					icon={<i className="icon i-date" />} />
			</span>
		)
	}
	
}
const styles={
	input:{
		display:"inline-block",
		visibility: "hidden",
		position: "absolute",
	    left: 0,
	    top:-10,
	    bottom:0,
	    right: 0,
	    zIndex:100
	}
}
export default DatePickerBtn;