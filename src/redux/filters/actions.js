import { FILTERBYPRICE } from './actionTypes';

export const filterByPrice = (minPrice, maxPrice) => {
	return {
		type: FILTERBYPRICE,
		payload: {
			minPrice,
			maxPrice,
		},
	};
};
