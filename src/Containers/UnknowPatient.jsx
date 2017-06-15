import React,{Component} from 'react';
import List from '../Components/List.jsx'
class UnknowPatient extends Component{

	render(){
		return (<List history={this.props.history} />);
	}
}
export default UnknowPatient;