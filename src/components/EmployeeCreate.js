import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Picker } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {
	onButtonPress() {
		const { name, phone, shift } = this.props;
		this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
	}

	render() {
		const { name, phone, shift } = this.props;
		return (
			<Card>
				<CardSection>
					<Input
						value={name}
						label='Name:'
						placeholder='Jane Doe'
						onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })} 
					/>
				</CardSection>
				<CardSection>
					<Input
						value={phone}
						label='Phone:'
						placeholder='555-555-5555'
						onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })} 
					/>
				</CardSection>
				<CardSection style={{ flexDirection: 'column' }}>
					<Text style={styles.pickerTextStyle}>Select Shift:</Text>
					<Picker
						selectedValue={shift}
						onValueChange={itemValue => 
							this.props.employeeUpdate({ prop: 'shift', value: itemValue })}
					>
						<Picker.Item label="Monday" value="Monday" />
						<Picker.Item label="Tuesday" value="Tuesday" />
						<Picker.Item label="Wednesday" value="Wedday" />
						<Picker.Item label="Thursday" value="Thursday" />
						<Picker.Item label="Friday" value="Friday" />
						<Picker.Item label="Saturday" value="Satday" />
						<Picker.Item label="Sunday" value="Sunday" />
					</Picker>
				</CardSection>
				<CardSection>
					<Button
						onPress={() => this.onButtonPress()}
					>
						Create
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	pickerTextStyle: {
		fontSize: 18,
		fontWeight: '600',
		paddingLeft: 20
	}
};

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;
	return {
		name,
		phone,
		shift
	};
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
