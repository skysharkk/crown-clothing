import { combineReducers } from 'redux';
import directoryReducer from './directory/directory.reducer';
import collectionReducer from './collections/collections.reducer';

const rootReducer = combineReducers({
	directory: directoryReducer,
	collections: collectionReducer,
});

export default rootReducer;
