import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
const User=()=>(
	<div><RaisedButton label="aaaa" /> This is User    
	<DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" />   
	<TimePicker hintText="12hr Format" /></div>
)
export default User;