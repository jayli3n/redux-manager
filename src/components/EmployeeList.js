import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Text } from 'react-native';
import _ from 'lodash';
import { employeesFetch } from '../actions';
import { Card, CardSection } from './common';
import ListItem from './ListItem';

class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeesFetch();
	}

	renderItem(employee) {
		console.log(employee);
		return (
			<ListItem employee={employee} />
		);
	}

	render() {
		const { user, employees } = this.props;
		return (
			<Card>
				<CardSection>
					<Text style={styles.titleStyle}>{`Hello, ${user.email}`}</Text>
				</CardSection>
				<FlatList 
					data={employees}
					renderItem={employee => this.renderItem(employee)}
					keyExtractor={employee => employee.uid.toString()}
				/>
			</Card>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		fontWeight: '500',
		padding: 15
	},
};

const mapStateToProps = (state) => {
	const employees = _.map(state.employees, (val, uid) => {
		return {
			...val, uid
		};
	});
	return {
		user: state.auth.user.user,
		employees
	};
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
