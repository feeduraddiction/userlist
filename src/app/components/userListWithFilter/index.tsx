import { UserFilter } from '../filter';
import { Users } from '../users';
import classes from './styles.module.scss';

export const UserListWithFilter = () => {
	return (
		<div className={classes.container}>
			<div className={classes.usersListWithFilter}>
				<UserFilter />
				<Users />
			</div>
		</div>
	);
};
