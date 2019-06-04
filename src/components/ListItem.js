import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
	onRowPress() {
		Actions.employeeEdit({
			employee: this.props.employee.item
		});
	}

	render() {
		const { titleStyle } = styles;
		const { name } = this.props.employee.item;

		return (
			<TouchableWithoutFeedback
				onPress={() => this.onRowPress()}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>{name}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
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

export default ListItem;
