import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
	render() {
		const { titleStyle } = styles;
		const { name } = this.props.employee.item;

		return (
			<CardSection>
				<Text style={titleStyle}>{name}</Text>
			</CardSection>
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
