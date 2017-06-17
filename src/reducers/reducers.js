import {combineReducers} from 'redux';
import {SET_TOP_TABS,SET_NAV_OPEN,SET_FONTSIZEBASE,SET_COLOR} from '../actions/constants.js';
import {REHYDRATE} from 'redux-persist/constants';
import {reducer as formReducer} from 'redux-form';
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
		case REHYDRATE://数据恢复
			let incoming=action.payload.config;
			if(incoming){
					//if(confirm("上次操作异常是否要恢复数据？")){
						return Object.assign({},state,{navOpen:incoming.navOpen});
				    //}
			}
			console.log(action)
			return state
		default:
			return state;
	}
}
let casec=(state={form:null},action)=>{
	switch(action.type){
		case REHYDRATE:
			let incoming=action.payload.form.casec;//从本地取form数据
			if(incoming.values){
				return Object.assign({},state,{form:incoming.values});
			}
		default:
			return state
	}
}
/*const form=(formRed)=>(state={},action)=>{
	switch (action.type) {
		case REHYDRATE:
			let incoming=action.payload.form;//从本地取form数据
			if(incoming && incoming.casec){
				let newState=Object.assign({},state,form);
				return formRed(newState,action);
			}
	}
	return formRed(state,action)
}*/
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

export default combineReducers({config,casec,form:formReducer})
