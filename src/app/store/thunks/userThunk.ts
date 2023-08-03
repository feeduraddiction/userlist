import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { setLoading, setUsers } from '../actions/userActions';
import { getUsers } from '../../services';

export const fetchUsers =
	(): ThunkAction<void, RootState, unknown, Action<string>> =>
	async (dispatch) => {
		try {
			dispatch(setLoading(true));
			const response = await getUsers();
			const users = response.data;
			dispatch(setUsers(users));
			dispatch(setLoading(false));
		} catch (error) {
			console.error(error);
		}
	};
