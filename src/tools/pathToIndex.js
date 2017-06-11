/*
* @Author: Administrator
* @Date:   2017-06-12 01:42:37
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-12 01:51:43
*/

'use strict';
//通过路径获得数据索引
const pathToIndex=({data,key='url',location,match})=>{

	//根据URL获得当前索引
	const menuIndex=data.findIndex((item)=>{
		if(match.exact){
			return	location.pathname==item[key]
		}
		return location.pathname.indexOf(item[key])==0
	})
	return menuIndex;
}
export default pathToIndex;