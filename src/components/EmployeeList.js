import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection } from './common';

class EmployeeList extends Component {
	render() {
		const { user } = this.props.user;
		return (
			<Card>
				<CardSection>
					<Text>Hello, {user.email}</Text>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.auth.user
	};
};

export default connect(mapStateToProps)(EmployeeList);
