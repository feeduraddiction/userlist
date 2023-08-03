import { FilterAction } from './../actions/filterActions';
import { SET_FILTER_INPUT } from '../actions/actionTypes';

export interface FilterState {
	filterInput: string;
}

const initialState: FilterState = {
	filterInput: '',
};

const filterReducer = (
	state = initialState,
	action: FilterAction
): FilterState => {
	switch (action.type) {
		case SET_FILTER_INPUT:
			return { ...state, filterInput: action.payload };
		default:
			return state;
	}
};

export default filterReducer;
