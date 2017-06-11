import React from 'react'
import PropTypes from 'prop-types'; 
import AttrIcon from '../Components/AttrIcon';

import {AppBar,Paper,IconButton,Tabs,Tab} from 'material-ui';


const Header=({match,history,location,title,tabData},{muiTheme})=>{

	styles.top.backgroundColor=muiTheme.palette.primary1Color;
	if(tabData && tabData.length>0){
		styles.tabsBox.maxWidth=tabData.length*150;//副导航宽度
	}
	

	return (
			<Paper  zDepth={2} style={styles.top}>
				<AppBar 
		 			titleStyle={muiTheme.appBarTitle} 
		 			style={styles.nav} 
		 			title={
		 				<div style={styles.logo}>
			 				<img src="./static/images/logo.png" />
			 				<div style={styles.title}>{title}</div>
		 				</div>
		 			}
		 			iconElementRight={<IconButton tooltip="退出系统"><AttrIcon icon="i-tuichu" /></IconButton>} 
		 			zDepth={0} />
				<div style={styles.tabsBox}>
					{tabData && 
						(<Tabs value={0} tabItemContainerStyle={styles.tabs}>
							{tabData.map((item,key)=>(
								<Tab label={item.name} key={key} value={key} />
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