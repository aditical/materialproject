import React, {Component} from 'react';
//material ui
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component{
	render(){
		return(
			<div>
			<TextField
             hintText="Email"
             floatingLabelText="Enter Email"

             /><br />
             <      TextField
                   hintText="Password"
                   floatingLabelText="Enter Password"
                   /> <br />

                   <RaisedButton label="SUBMIT" primary={true}  />

            </div>
			)
	}
}
export default Login;