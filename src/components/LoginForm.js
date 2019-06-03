import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChange, passwordChange, loginUser } from '../actions';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChange(text);
	}

	onPasswordChange(text) {
		this.props.passwordChange(text);
	}

	onButtonPress() {
		this.props.loginUser(this.props);
	}

	render() {
		const { email, password, loading, error } = this.props;

		return (
			<Card>
				<CardSection>
					<Input 
						value={email}
						label='Email:'
						placeholder='user@gmail.com'
						onChangeText={text => this.onEmailChange(text)}
					/>
				</CardSection>

				<CardSection>
					<Input 
						value={password}
						label='Password:'
						placeholder='password'
						secureTextEntry
						onChangeText={text => this.onPasswordChange(text)}
					/>
				</CardSection>

				<CardSection>
					{loading ? 
						<Spinner /> : 
						<Button onPress={() => this.onButtonPress()}>
							Log In
						</Button>}
				</CardSection>

				{error ? 
					<View style={{ alignItems: 'center', marginTop: 10 }}>
						<Text style={{ color: 'red' }}>{error}</Text>
					</View>
					: null}
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const { email, password, loading, error } = state.auth;
	return {
		email,
		password,
		loading,
		error
	};
};

export default connect(mapStateToProps, { 
	emailChange, 
	passwordChange, 
	loginUser 
})(LoginForm);
