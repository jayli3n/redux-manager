import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
	render() {
		const { name, phone, shift } = this.props;

		return (
			<View>
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
			</View>
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
