import { User } from '../../types';
import {
	SET_LOADING,
	SET_USERS,
	SET_DELETED_USER,
	SET_FILTERED_USER,
	RESET_USERS,
} from '../actions/actionTypes';
import { UserAction } from '../actions/userActions';

// initialUsers are used for storing original array of users so it can be reset anytime even after deleting users.
// I utilized this solution to avoid unneccesary api calls.
// Maybe, in some cases it would be cheaper to make api call then store 3 different arrays. Who knows?

export interface UserState {
	users: User[];
	filteredUsers: User[];
	initialUsers: User[];
	loading: boolean;
}

const initialState: UserState = {
	users: [],
	filteredUsers: [],
	initialUsers: [],
	loading: false,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				users: action.payload,
				filteredUsers: action.payload,
				initialUsers: action.payload,
			};
		case SET_LOADING:
			return { ...state, loading: action.payload };
		case SET_DELETED_USER:
			const userId = action.payload;
			const updatedUsers = state.users.filter((user) => user.id !== userId);
			const updatedFilteredUsers = state.filteredUsers.filter(
				(user) => user.id !== userId
			);
			return {
				...state,
				users: updatedUsers,
				filteredUsers: updatedFilteredUsers,
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
		case RESET_USERS:
			return {
				...state,
				users: state.initialUsers,
				filteredUsers: state.initialUsers,
			};
		default:
			return state;
	}
};

export default userReducer;
