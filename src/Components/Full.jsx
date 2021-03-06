import React from 'react';
const Full=(props)=>{
	const newStyle=Object.assign({},props.style,styles.full);
	const children=props.children;
	let newProps=Object.assign({},props,{children:null});
	return <div {...newProps} style={newStyle} >{children}</div>
}
const styles={
	full:{
		width:'100%',
		height:'100%',
		boxSizing: 'border-box'
	}
}
export default Full;