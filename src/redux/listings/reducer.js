import { REFRESH, LOADED } from './actionTypes';
import initialState from './initialState';
import { formatListing } from './formatter';

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADED:
			const formattedPayload = formatListing(action.payload.immobilien.nodes);
			return {
				...state,
				loading: false,
				listings: formattedPayload,
			};
		case REFRESH:
			return state;

		default:
			return state;
	}
};

export default reducer;
