import React from 'react'
import PropTypes from 'prop-types'; 
import AttrIcon from '../Components/AttrIcon';

import {AppBar,Paper,IconButton,Tabs,Tab} from 'material-ui';


const Header=({match,history,location,title,tabData,height,onLeftIconButtonTouchTap},{muiTheme})=>{

	if(tabData && tabData.length>0){
		styles.newTabsBox=Object.assign({},styles.tabsBox,{maxWidth:tabData.length*150}) ;//副导航宽度
	}
	styles.top.backgroundColor=muiTheme.palette.primary1Color;
	styles.top.height=height;
	return (
			<Paper  zDepth={2} style={styles.top}>
				<AppBar 
		 			titleStyle={muiTheme.appBarTitle} 
		 			onLeftIconButtonTouchTap={onLeftIconButtonTouchTap}
		 			style={styles.nav} 
		 			title={
		 				<div style={styles.logo}>
			 				<img src="./static/images/logo.png" />
			 				<div style={styles.title}>{title}</div>
		 				</div>
		 			}
		 			iconElementRight={<IconButton tooltip="退出系统"><AttrIcon icon="i-tuichu" /></IconButton>} 
		 			zDepth={0} />
				<div style={styles.newTabsBox}>
					{tabData && 
						(<Tabs  value={location.pathname} onChange={(key)=>{history.replace(key)}} tabItemContainerStyle={styles.tabs}>
							{tabData.map((item,key)=>(
								<Tab style={muiTheme.tab} label={item.name} key={key} value={item.url} />
							))}
						</Tabs>)
					}
				</div>

		</Paper>
	)
}

Header.contextTypes={
	muiTheme:PropTypes.object.isRequired
}

const styles={
	top:{
		position:'fixed',
		left:0,
		right:0,
		zIndex:1301,
		overflow: 'hidden'
	},
	logo:{
		display:'flex',
		alignItems:'center',
		height:'100%'
	},
	title:{
		paddingLeft:20,
		marginLeft:20,
		lineHeight:'40px',
		borderLeft:"1px solid rgba(255,255,255,0.2)"
	},
	nav:{
		backgroundColor:"none"
	},
	tabsBox:{
		margin:'auto',
	},
	tabs:{
		backgroundColor:"none",
	},

}

export default Header;