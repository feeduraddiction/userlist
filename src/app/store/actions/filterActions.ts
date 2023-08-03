import { SET_FILTER_INPUT } from './actionTypes';

export interface SetFilterInputAction {
	type: typeof SET_FILTER_INPUT;
	payload: string;
}

export const setFilterInpt = (value: string): SetFilterInputAction => ({
	type: SET_FILTER_INPUT,
	payload: value,
});

export type FilterAction = SetFilterInputAction;
