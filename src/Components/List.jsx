import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {FlatButton,Avatar,Paper } from 'material-ui';
const List=({history})=>{
	return(
		<div>
			<div>
				<h2 style={styles.title}>已预约报到病人：0 </h2>
				<small style={styles.title}>状态说明:应诊_指患者当前正在看病；候诊_指患者当前正在排队看病；过诊_指患者报到时间超过就诊时间或者医生叫诊时患者未及时应诊</small>
			</div>
<Paper  zDepth={1} style={{marginTop:20	}}>
		<Table selectable={false}>

		  <TableHeader  >
		    <TableRow>
		      <TableHeaderColumn>状态</TableHeaderColumn>
		      <TableHeaderColumn>号码</TableHeaderColumn>
		      <TableHeaderColumn>头像</TableHeaderColumn>
		      <TableHeaderColumn>姓名</TableHeaderColumn>
		      <TableHeaderColumn>性别</TableHeaderColumn>
		      <TableHeaderColumn>年龄</TableHeaderColumn>
		      <TableHeaderColumn>就诊记录</TableHeaderColumn>
		      <TableHeaderColumn>时间</TableHeaderColumn>
		      <TableHeaderColumn>操作</TableHeaderColumn>
		    </TableRow>
		  </TableHeader>
		  <TableBody showRowHover={true} >

		    <TableRow>
		      <TableRowColumn>候诊</TableRowColumn>
		      <TableRowColumn>18712345678</TableRowColumn>
		      <TableRowColumn><Avatar src="http://www.material-ui.com/images/ok-128.jpg" /></TableRowColumn>
		      <TableRowColumn>毒药</TableRowColumn>
		      <TableRowColumn>22</TableRowColumn>
		      <TableRowColumn>男</TableRowColumn>
		      <TableRowColumn>初诊</TableRowColumn>
		      <TableRowColumn>16:30-17:00</TableRowColumn>
		      <TableRowColumn><FlatButton label="叫诊" onTouchTap={()=>history.push('/app/clinic/casec')} 	primary={true} /></TableRowColumn>
		    </TableRow>
		    <TableRow>
		    	<TableRowColumn>候诊</TableRowColumn>
		    	<TableRowColumn>18712345678</TableRowColumn>
		    	<TableRowColumn><Avatar src="http://www.material-ui.com/images/ok-128.jpg" /></TableRowColumn>
		    	<TableRowColumn>毒药</TableRowColumn>
		    	<TableRowColumn>22</TableRowColumn>
		    	<TableRowColumn>男</TableRowColumn>
		    	<TableRowColumn>初诊</TableRowColumn>
		    	<TableRowColumn>16:30-17:00</TableRowColumn>
		    	
		    	<TableRowColumn><FlatButton label="叫诊" 	primary={true} /></TableRowColumn>
		    </TableRow>
		    <TableRow>
		     	<TableRowColumn>候诊</TableRowColumn>
		     	<TableRowColumn>18712345678</TableRowColumn>
		     	<TableRowColumn><Avatar src="http://www.material-ui.com/images/ok-128.jpg" /></TableRowColumn>
		     	<TableRowColumn>毒药</TableRowColumn>
		     	<TableRowColumn>22</TableRowColumn>
		     	<TableRowColumn>男</TableRowColumn>
		     	<TableRowColumn>初诊</TableRowColumn>
		     	<TableRowColumn>16:30-17:00</TableRowColumn>
		     	<TableRowColumn><FlatButton label="叫诊" 	primary={true} /></TableRowColumn>
		    </TableRow>
		    <TableRow>
			    <TableRowColumn>候诊</TableRowColumn>
			    <TableRowColumn>18712345678</TableRowColumn>
			    <TableRowColumn><Avatar src="http://www.material-ui.com/images/ok-128.jpg" /></TableRowColumn>
			    <TableRowColumn>毒药</TableRowColumn>
			    <TableRowColumn>22</TableRowColumn>
			    <TableRowColumn>男</TableRowColumn>
			    <TableRowColumn>初诊</TableRowColumn>
			    <TableRowColumn>16:30-17:00</TableRowColumn>
			    <TableRowColumn><FlatButton label="叫诊" 	primary={true} /></TableRowColumn>
		    </TableRow>
		    <TableRow>
		    	<TableRowColumn>候诊</TableRowColumn>
		    	<TableRowColumn>18712345678</TableRowColumn>
		    	<TableRowColumn><Avatar src="http://www.material-ui.com/images/ok-128.jpg" /></TableRowColumn>
		    	<TableRowColumn>毒药</TableRowColumn>
		    	<TableRowColumn>22</TableRowColumn>
		    	<TableRowColumn>男</TableRowColumn>
		    	<TableRowColumn>初诊</TableRowColumn>
		    	<TableRowColumn>16:30-17:00</TableRowColumn>
		    	<TableRowColumn><FlatButton label="叫诊" 	primary={true} /></TableRowColumn>
		    </TableRow>
		  </TableBody>
		</Table>

</Paper>

		<div>
				<h2 style={styles.title}>已预约未报到病人：0 </h2>
		</div>
<Paper  zDepth={1} style={{marginTop:20	}} >
		<Table selectable={false}>
		  <TableHeader  >
		    <TableRow>
		      <TableHeaderColumn>号码</TableHeaderColumn>
		      <TableHeaderColumn>头像</TableHeaderColumn>
		      <TableHeaderColumn>姓名</TableHeaderColumn>
		      <TableHeaderColumn>性别</TableHeaderColumn>
		      <TableHeaderColumn>年龄</TableHeaderColumn>
		      <TableHeaderColumn>就诊记录</TableHeaderColumn>
		      <TableHeaderColumn>时间</TableHeaderColumn>
		    </TableRow>
		  </TableHeader>
		  <TableBody showRowHover={true} >

		    <TableRow>
		      <TableRowColumn>18712345678</TableRowColumn>
		      <TableRowColumn><Avatar src="http://www.material-ui.com/images/ok-128.jpg" /></TableRowColumn>
		      <TableRowColumn>毒药</TableRowColumn>
		      <TableRowColumn>22</TableRowColumn>
		      <TableRowColumn>男</TableRowColumn>
		      <TableRowColumn>初诊</TableRowColumn>
		      <TableRowColumn>16:30-17:00</TableRowColumn>
		    </TableRow>
		  </TableBody>
		</Table>
</Paper>

		</div>
	)
}
const styles={
	title:{
		fontWeight: "lighter",
		marginBottom: 5,
		marginTop:40
	}
}
export default List