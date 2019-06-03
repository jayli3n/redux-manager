import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import {
	apiKey,
	authDomain,
	databaseURL,
	projectId,
	storageBucket,
	messagingSenderId,
	appId
} from 'react-native-dotenv';
import reducers from './reducers';

class App extends Component {
	componentWillMount() {
		// Initialize Firebase
		const firebaseConfig = {
			apiKey,
			authDomain,
			databaseURL,
			projectId,
			storageBucket,
			messagingSenderId,
			appId
		};
		firebase.initializeApp(firebaseConfig);
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Text>Hello World!</Text>
				</View>
			</Provider>
		);
	}
}

export default App;
