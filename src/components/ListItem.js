import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './Common';
import * as actions from '../actions';

class ListItem extends Component {
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	render() {
		const { titleStyle, descriptionStyle } = styles;
		const { id, title, description } = this.props.library.item;
		const { isExpand, selectLibrary } = this.props;

		return (
			<TouchableWithoutFeedback 
				onPress={() => selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>{title}</Text>
					</CardSection>

					{isExpand ? 
						<CardSection>
							<Text style={descriptionStyle}>{description}</Text>
						</CardSection>
						: null}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		isExpand: state.selection === ownProps.library.item.id
	};
};

const styles = {
	titleStyle: {
		fontSize: 18,
		fontWeight: '500',
		padding: 15
	},

	descriptionStyle: {
		fontSize: 18,
		padding: 15,
		paddingLeft: 30
	}
};

export default connect(mapStateToProps, actions)(ListItem);
