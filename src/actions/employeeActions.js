import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATED
} from './types';

export const employeeUpdate = ({ prop, value }) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: { prop, value }
	};
};

export const employeeCreate = ({ name, phone, shift }) => {
	const { currentUser } = firebase.auth();
	const dbRef = firebase.database().ref(`/users/${currentUser.uid}/employees`);

	return (dispatch) => {
		dbRef.push({
			name,
			phone,
			shift
		})
		.then(() => { 
			dispatch({
				type: EMPLOYEE_CREATED,
			});
			Actions.pop();
		});
	};
};
