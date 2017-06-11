import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Home=(props)=>{
	console.log(props.match)
	return	(<div>
	<img src="./static/images/a.jpg" height="488" width="640"  /> <RaisedButton label="Default" /> This is Home
	</div>)
}

export default Home;