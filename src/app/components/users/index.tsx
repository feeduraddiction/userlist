import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { AppDispatch } from '../../store';
import { fetchUsers } from '../../store/thunks/userThunk';
import { useEffect } from 'react';
import { UserItem } from './user';
import classes from './styles.module.scss';
import { Loader } from '../../shared/display';

export const Users = () => {
	const dispatch = useDispatch<AppDispatch>();
	const users = useSelector((state: RootState) => state.user.filteredUsers);
	const isLoading = useSelector((state: RootState) => state.user.loading);
	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	return (
		<div className={classes.users}>
			{isLoading ? (
				<Loader />
			) : (
				users.map((user) => <UserItem key={user.id} user={user} />)
			)}
			{!users.length && !isLoading && (
				<h3 style={{ textAlign: 'center' }}>No users found</h3>
			)}
		</div>
	);
};
