import React from 'react'
import PropTypes from 'prop-types'; 
import AttrIcon from '../Components/AttrIcon';
import {Drawer,Divider,makeSelectable,List,ListItem} from 'material-ui';
import {NavLink} from 'react-router-dom';
import pathToIndex from '../tools/pathToIndex';
let SelectableList = makeSelectable(List);

const LeftMenu=({match,history,location,topHeight,open},{muiTheme})=>{
	styles.leftMenu.top=topHeight+10;
	//导航数据
	const menuData=[
	{name:"门诊",url:`${match.url}/clinic`,icon:<AttrIcon icon="i-yiwaimenzhen" />},
	{name:"档案",url:`${match.url}/home`,icon:<AttrIcon icon="i-archives" />},
	{name:"统计",url:`${match.url}/user`,icon:<AttrIcon icon="i-tongji" />},
	{name:"设置",url:`${match.url}/setup`,icon:<AttrIcon icon="i-iconziti09" /> }
	];

	//根据URL获得当前索引
	const menuIndex=pathToIndex({data:menuData,location,match})

	return (
			<Drawer open={open} zDepth={1}  >
				<SelectableList value={menuIndex} style={styles.leftMenu} >
		 		{menuData.map((item,key)=>(
		 			<ListItem key={key} 
			 			primaryText={item.name} 
			 			onTouchTap={()=>{history.push(item.url)}}
			 			leftIcon={item.icon} 
			 			value={key}
			 			style={muiTheme.listItem}
		 			/>
		 		))}
				</SelectableList>
			</Drawer>)
}
LeftMenu.contextTypes={
	muiTheme:PropTypes.object.isRequired
}

const styles={
	leftMenu:{
		position:"absolute",
		top:112,
		width:'100%',
		selectColor:"#ff6623",
		transition: "top 0.3s"
	},
}

export default LeftMenu;