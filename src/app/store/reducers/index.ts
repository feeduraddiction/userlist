import { combineReducers } from 'redux';
import userReducer, { UserState } from './userReducer';
import filterReducer, { FilterState } from './filterReducer';

export interface RootState {
	user: UserState;
	filter: FilterState;
}

const rootReducer = combineReducers({
	user: userReducer,
	filter: filterReducer,
});

export default rootReducer;
