import {SET_TOP_TABS,SET_NAV_OPEN} from './constants.js';
export const setTopTabs=(data)=>(
{//设置头部导航
	type:SET_TOP_TABS,
	data,
})
export const openNav=(bool)=>({//设置右边导航是否显示
	type:SET_NAV_OPEN,
	open:bool,
})

