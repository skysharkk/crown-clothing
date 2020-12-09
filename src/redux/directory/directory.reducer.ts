import {
	FETCH_DIRECTORY_FAILURE,
	FETCH_DIRECTORY_START,
	FETCH_DIRECTORY_SUCCESS,
} from './directory.constants';
import { DirectoryFetchDataAction, IDirectoryState } from './directory.types';

const INITIAL_STATE: IDirectoryState = {
	directoryData: null,
	isLoading: true,
	error: null,
};

const directoryReducer = (
	state: IDirectoryState = INITIAL_STATE,
	action: DirectoryFetchDataAction
): IDirectoryState => {
	switch (action.type) {
		case FETCH_DIRECTORY_START:
			return {
				...state,
				isLoading: true,
			};
		case FETCH_DIRECTORY_SUCCESS:
			return {
				...state,
				isLoading: false,
				directoryData: action.payload.directoryData,
			};
		case FETCH_DIRECTORY_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload.error,
			};
		default:
			return state;
	}
};

export default directoryReducer;
