import React from 'react';
const Full=(props)=>{
	const newStyle=Object.assign({},props.style,styles.full);
	return <div {...props} style={newStyle} >{props.children}</div>
}
const styles={
	full:{
		width:'100%',
		height:'100%',
		boxSizing: 'border-box'
	}
}
export default Full;