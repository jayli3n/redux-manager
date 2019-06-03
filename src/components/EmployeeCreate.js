import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { View, Text } from 'react-native';

class EmployeeCreate extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label='Name:'
						placeholder='Jane Doe'
						onChangeText={text => this.onEmailChange(text)} 
					/>
				</CardSection>
				<CardSection>
					<Input
						label='Phone:'
						placeholder='555-555-5555'
						onChangeText={text => this.onEmailChange(text)} 
					/>
				</CardSection>
				<CardSection>
					<Button>
						Create
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default EmployeeCreate;
