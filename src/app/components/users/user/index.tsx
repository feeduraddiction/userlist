import { BaseSyntheticEvent, memo, useState } from 'react';
import { TrashIcon } from '../../../assets/svg';
import { User } from '../../../types/user';
import classes from './styles.module.scss';
import { HighlightedText, Modal } from '../../../shared/display';
import { UserInfoModal } from '../../userInfoModal';
import { setDeletedUser } from '../../../store/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';

const UserItemComponent = ({ user }: { user: User }) => {
	const dispatch = useDispatch();
	const highliht = useSelector((state: RootState) => state.filter.filterInput);
	const [open, setOpen] = useState(false);
	const openModalWithInfoHandler = (event: BaseSyntheticEvent) => {
		document.body.style.overflow = 'hidden';
		setOpen(true);
	};

	const removeItemHandler = (event: BaseSyntheticEvent) => {
		event.stopPropagation();
		dispatch(setDeletedUser(user.id));
	};
	return (
		<>
			{open && (
				<Modal onClose={() => setOpen(false)}>
					<UserInfoModal user={user} />
				</Modal>
			)}
			<div className={classes.userItem} onClick={openModalWithInfoHandler}>
				<button
					className={classes.deleteItem}
					onClick={removeItemHandler}
					type="button"
				>
					<TrashIcon />
				</button>
				<h3 className={classes.userItemName}>
					<HighlightedText text={user.name} highlight={highliht} />
				</h3>
				<div className={classes.userItemEmailAndUsername}>
					<p>
						<span className={classes.title}> Usernmame: </span>
						<HighlightedText text={user.username} highlight={highliht} />
					</p>
					<p>
						<span className={classes.title}> Email: </span>
						<HighlightedText text={user.email} highlight={highliht} />
					</p>
				</div>
			</div>
		</>
	);
};

export const UserItem = memo(UserItemComponent);
