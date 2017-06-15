import {indigo500,pink400,orange1000} from 'material-ui/styles/colors';
import typography from 'material-ui/styles/typography';
const getColor=({color})=>{
	let newColor=color;
	if(!color)newColor=indigo500;
	return ({

				primary1Color:newColor,
				primary2Color:pink400,
				primary3Color:orange1000,
			})
}



const muiTheme=({fontSizeBase=0,color})=>({
	fontSizeBase,
	palette:{
		...getColor({color})
	},
	appBarTitle:{//导航标题
    	fontSize:18+fontSizeBase,
    	marginLeft:20,
    	backgroundColor:"none"
  	},
  	bottomNavigation: {
      unselectedFontSize: 12+fontSizeBase,
      selectedFontSize: 14+fontSizeBase,
    },
    chip: {
      fontSize: 14+fontSizeBase,
      fontWeight: typography.fontWeightNormal,
    },
    dialog: {
      titleFontSize: 22+fontSizeBase,
      bodyFontSize: 16+fontSizeBase,
    },
    flatButton: {
      fontSize: typography.fontStyleButtonFontSize+fontSizeBase,
    },
     raisedButton: {
      fontSize: typography.fontStyleButtonFontSize+fontSizeBase,
      fontWeight: typography.fontWeightMedium,
    },
    toolbar: {
      height: 56,
      titleFontSize: 20+fontSizeBase,
    },
    tab:{
    	fontSize:14+fontSizeBase,
    },
    listItem:{
    	fontSize:16+fontSizeBase,
    }
})
export default muiTheme