import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = (props) => {
	const { containerStyle, labelStyle, textInputStyle } = styles;
	const { label, value, onChangeText, placeholder, secureTextEntry } = props;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput 
				autoCorrect={false}
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				style={textInputStyle}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

const styles = {
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},

	labelStyle: {
		fontSize: 18,
		flex: 1,
	},

	textInputStyle: {
		fontSize: 18,
		lineHeight: 23,
		flex: 2,
		height: 20,
		width: null,
		borderBottomWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
	}
};

export { Input };
