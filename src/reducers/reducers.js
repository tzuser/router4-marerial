import {combineReducers} from 'redux';
import {SET_TOP_TABS,SET_NAV_OPEN,SET_FONTSIZEBASE,SET_COLOR} from '../actions/constants.js';

const config=(state={fontSizeBase:0,tabData:null,navOpen:true,color:null},action)=>{
	switch (action.type) {
		case SET_TOP_TABS://设置头部TABS
			return Object.assign({},state,{tabData: action.data});
		case SET_NAV_OPEN://设置左边NAV是否显示
			return Object.assign({},state,{navOpen: action.open});
		case SET_FONTSIZEBASE://设置字体大小
			return Object.assign({},state,{fontSizeBase: action.fontSizeBase});
		case SET_COLOR://设置主题颜色
			return Object.assign({},state,{color: action.color});
		default:
			return state;
	}
}
/*const user = (state = {}, action) => {
	switch (action.type) {
		case SET_USER:
		  return Object.assign({},state,{balance: action.balance});
		default:
			return state;
	}
};
const post = (state = {list:[],len:20,start:0,count:null},action)=>{
	switch(action.type){
		case GET_POST_LIST:
			return Object.assign({},state,{list:action.list,len:action.len,start:action.start,count:action.count})
		default:
			return state;
	}
}*/

export default combineReducers({config})
