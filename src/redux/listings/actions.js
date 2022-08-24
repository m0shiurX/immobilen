import { REFRESH, LOADED } from './actionTypes';

export const refresh = () => {
	return {
		type: REFRESH,
	};
};

export const loaded = (listings) => {
	return {
		type: LOADED,
		payload: listings,
	};
};
