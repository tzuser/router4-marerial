import React from 'react';
import {Paper,FlatButton,DatePicker} from 'material-ui';
import List from '../Components/List.jsx';
import {Tabs, Tab} from 'material-ui/Tabs';
const Clinic=()=>{
	return (<div style={{padding:"20px 40px",}}>
			<Paper  zDepth={1} style={{marginBottom:20,padding:10}} >
				<FlatButton label="医生屏显链接"  /> <DatePicker hintText="选择日期" container="inline" />   
			</Paper>
					<Tabs>
					  <Tab label="未诊病人" >
					    <List />
					  </Tab>
					  <Tab label="已诊病人" >
					    <div>
					      <h2 >已诊病人</h2>
					      <p>
					        This is another example tab.
					      </p>
					    </div>
					  </Tab>
					  <Tab
					    label="简易门诊"
					    data-route="/home"
					    onActive={null}
					  >
					    <div>
					      <h2 >简易门诊</h2>
					      <p>
					        This is a third example tab.
					      </p>
					    </div>
					  </Tab>
					</Tabs>
			</div>)
}

export default Clinic;