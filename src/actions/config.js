import {SET_TOP_TABS,SET_NAV_OPEN,SET_FONTSIZEBASE,SET_COLOR} from './constants.js';

export const setTopTabs=(data)=>(
{//设置头部导航
	type:SET_TOP_TABS,
	data,
});

export const openNav=(bool)=>({//设置右边导航是否显示
	type:SET_NAV_OPEN,
	open:bool,
});

export const setFontSizeBase=(fontSizeBase)=>({//设置字体大小
	type:SET_FONTSIZEBASE,
	fontSizeBase:fontSizeBase,
});
export const setColor=(color)=>({//设置主题颜色
	type:SET_COLOR,
	color,
});