import { User } from '../../types';
import {
	SET_LOADING,
	SET_USERS,
	SET_DELETED_USER,
	SET_FILTERED_USER,
} from '../actions/actionTypes';
import { UserAction } from '../actions/userActions';

export interface UserState {
	users: User[];
	filteredUsers: User[];
	loading: boolean;
}

const initialState: UserState = {
	users: [],
	filteredUsers: [],
	loading: false,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
	switch (action.type) {
		case SET_USERS:
			return { ...state, users: action.payload };
		case SET_LOADING:
			return { ...state, loading: action.payload };
		case SET_DELETED_USER:
			return {
				...state,
				filteredUsers: state.filteredUsers.filter(
					(user) => user.id !== action.payload
				),
			};
		case SET_FILTERED_USER:
			const inputValue = action.payload.toLowerCase().trim();
			const filteredUsers = state.users.filter((user) => {
				const nameMatch = user.name.toLowerCase().includes(inputValue);
				const usernameMatch = user.username.toLowerCase().includes(inputValue);
				const emailMatch = user.email.toLowerCase().includes(inputValue);
				return nameMatch || usernameMatch || emailMatch;
			});
			return { ...state, filteredUsers };
		default:
			return state;
	}
};

export default userReducer;
