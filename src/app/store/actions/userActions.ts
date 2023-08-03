import { User } from '../../types';
import {
	SET_USERS,
	SET_LOADING,
	SET_DELETED_USER,
	SET_FILTERED_USER,
	RESET_USERS,
} from './actionTypes';

export interface ResetUsersAction {
	type: typeof RESET_USERS;
}

export const resetUsers = (): ResetUsersAction => ({
	type: RESET_USERS,
});

export interface SetUsersAction {
	type: typeof SET_USERS;
	payload: User[];
}

export const setUsers = (users: User[]): SetUsersAction => ({
	type: SET_USERS,
	payload: users,
});

export interface SetLoadingAction {
	type: typeof SET_LOADING;
	payload: boolean;
}

export const setLoading = (loading: boolean): SetLoadingAction => ({
	type: SET_LOADING,
	payload: loading,
});

export interface SetDeletedUserAction {
	type: typeof SET_DELETED_USER;
	payload: number;
}

export const setDeletedUser = (userId: number): SetDeletedUserAction => ({
	type: SET_DELETED_USER,
	payload: userId,
});

export interface setFilteredUsersAction {
	type: typeof SET_FILTERED_USER;
	payload: string;
}

export const setFilteredUsers = (value: string): setFilteredUsersAction => ({
	type: SET_FILTERED_USER,
	payload: value,
});

export type UserAction =
	| SetUsersAction
	| SetLoadingAction
	| SetDeletedUserAction
	| setFilteredUsersAction
	| ResetUsersAction;
