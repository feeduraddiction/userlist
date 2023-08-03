import { User } from '../../types/user';
import classes from './styles.module.scss';

export const UserInfoModal = ({ user }: { user: User }) => {
	return (
		<div className={classes.userInfo}>
			<div>
				<h4>Address</h4>
				<p>
					{user.address.zipcode} {user.address.city} {user.address.street}{' '}
					{user.address.suite}
				</p>
			</div>
			<div>
				<h4>Company</h4>
				<p>
					{user.company.name} <br />
					{user.company.catchPhrase}
				</p>
			</div>
		</div>
	);
};
