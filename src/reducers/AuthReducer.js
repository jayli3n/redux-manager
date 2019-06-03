import {
	EMAIL_CHANGE,
	PASSWORD_CHANGE,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGGING_USER
} from '../actions/types';

const INITIAL_STATE = {
	email: '',
	password: '',
	loading: false,
	error: '',
	user: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGE:
			return {
				...state,
				email: action.payload
			};
		case PASSWORD_CHANGE:
			return {
				...state,
				password: action.payload
			};
		case LOGIN_USER_SUCCESS:
			return {
				...state,
				user: action.payload,
				loading: false
			};
		case LOGIN_USER_FAIL:
			return {
				...state,
				error: action.payload,
				loading: false
			};
		case LOGGING_USER:
			return {
				...state,
				error: '',
				loading: action.payload
			};
		default:
			return state;
	}
};
