import { FILTERBYPRICE } from './actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FILTERBYPRICE:
			const { minPrice, maxPrice } = action.payload;
			return {
				...state,
				minPrice: minPrice,
				maxPrice: maxPrice,
			};

		default:
			return state;
	}
};

export default reducer;
