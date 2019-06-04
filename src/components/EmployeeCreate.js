import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
	render() {
		const { name, phone, shift } = this.props;
		return (
			<Card>
				<CardSection>
					<Input
						value={name}
						label='Name:'
						placeholder='Jane Doe'
						onChangeText={text => this.props.employeeUpdate(name, text)} 
					/>
				</CardSection>
				<CardSection>
					<Input
						value={phone}
						label='Phone:'
						placeholder='555-555-5555'
						onChangeText={text => this.props.employeeUpdate(phone, text)} 
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

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;
	return {
		name,
		phone,
		shift
	};
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
