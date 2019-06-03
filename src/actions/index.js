import firebase from 'firebase';
import { 
	EMAIL_CHANGE,
	PASSWORD_CHANGE,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGGING_USER
} from './types';

export const emailChange = (text) => {
	return {
		type: EMAIL_CHANGE,
		payload: text
	};
};

export const passwordChange = (text) => {
	return {
		type: PASSWORD_CHANGE,
		payload: text
	};
};

const dispatchLoginSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
};

const dispatchLoginFail = (dispatch, error) => {
	dispatch({
		type: LOGIN_USER_FAIL,
		payload: error.message
	});
};

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({
			type: LOGGING_USER,
			payload: true
		});

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => dispatchLoginSuccess(dispatch, user))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(user => dispatchLoginSuccess(dispatch, user))
					.catch(error => dispatchLoginFail(dispatch, error));
			});
	};
};
