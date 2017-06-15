//右边容器
import React from 'react';
const Content=(props)=>{
	const newStyle=Object.assign({},props.style,styles.content);
	const children=props.children;
	let newProps=Object.assign({},props,{children:null});
	return <div {...newProps} style={newStyle} >{children}</div>
}
const styles={
	content:{
		padding:"20px 40px"
	}
}
export default Content;