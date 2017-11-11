import React, {Component} from 'react';
import {View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
//to make network request
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-2f210.cloudfunctions.net';

class SignUpForm extends Component {

	//defining state
	state = { phone: ''};

	//ES2017
	// async await system 
	handleSubmit = () => {
		axios.post(`${ROOT_URL}/createUser`, {
			phone: this.state.phone
		})
			.then( () => {
				axios.post(`${ROOT_URL}/requestOneTimePassword`, {
					phone: this.state.phone
				})

			}) 
	}

	render(){
		return(
			<View>
				<View style={{ marginBottom: 10 }}>	
					<FormLabel>Enter Phone Number </FormLabel>
					<FormInput
					value={this.state.phone}
					onChangeText={phone => this.setState({ phone })}/>
				</View>
					<Button title="Submit" 
					onPress={this.handleSubmit}/>
			</View>
			);
	}
}

export default SignUpForm;