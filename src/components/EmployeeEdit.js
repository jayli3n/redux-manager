import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, ConfirmModal } from './common';
import { employeeEdit, employeeUpdate, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
	constructor() {
		super();
		this.state = {
			showModal: false
		};
	}

	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}

	onButtonPress() {
		const { name, phone, shift } = this.props;
		this.props.employeeEdit({ name, phone, shift, uid: this.props.employee.uid });
	}

	onSMSPress() {
		const { phone, shift } = this.props;
		Communications.text(phone, `Your upcoming shift is on ${shift}`);
	}

	onFireConfirm() {
		this.props.employeeDelete({ uid: this.props.employee.uid });
	}

	toggleModal() {
		this.setState({
			showModal: !this.state.showModal
		});
	}

	render() {
		return (
			<Card>
				<EmployeeForm />
				<CardSection>
					<Button
						onPress={() => this.onButtonPress()}
					>
						Save Changes
					</Button>
				</CardSection>
				<CardSection>
					<Button
						onPress={() => this.onSMSPress()}
					>
						SMS Schedule
					</Button>
				</CardSection>
				<CardSection>
					<Button
						onPress={() => this.toggleModal()}
					>
						Fire Employee
					</Button>
				</CardSection>

				<ConfirmModal 
					visible={this.state.showModal}
					onAccept={() => this.onFireConfirm()}
					onDecline={() => this.toggleModal()}
				>
					{`Are you sure you want to fire ${this.props.name}?`}
				</ConfirmModal>
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

export default connect(mapStateToProps, { employeeUpdate, employeeEdit, employeeDelete })(EmployeeEdit);
