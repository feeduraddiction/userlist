import { BaseSyntheticEvent } from 'react';
import { InputControlled } from '../../shared/input';
import classes from './styles.module.scss';
import { Button } from '../../shared/controls';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterInpt } from '../../store/actions/filterActions';
import { setFilteredUsers } from '../../store/actions/userActions';
import { RootState } from '../../store/reducers';

export const UserFilter = () => {
	const dispatch = useDispatch();
	const filterInputValue = useSelector(
		(state: RootState) => state.filter.filterInput
	);
	const changeFilterInputHandler = (event: BaseSyntheticEvent) => {
		dispatch(setFilterInpt(event.currentTarget.value));
		dispatch(setFilteredUsers(event.currentTarget.value));
	};

	const resetHandler = () => {
		dispatch(setFilterInpt(''));
		dispatch(setFilteredUsers(''));
	};
	return (
		<div className={classes.filter}>
			<InputControlled
				placeholder="Filter by name, usename or Email"
				onChange={changeFilterInputHandler}
				value={filterInputValue}
			/>
			<Button onClick={resetHandler}>Reset</Button>
		</div>
	);
};
