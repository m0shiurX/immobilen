import { combineReducers } from 'redux';
import filterReducer from './filters/reducer';
import listingReducer from './listings/reducer';

const rootReducer = combineReducers({
	listings: listingReducer,
	filters: filterReducer,
});

export default rootReducer;
