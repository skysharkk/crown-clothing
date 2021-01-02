import {
	FETCH_COLLECTIONS_FAILURE,
	FETCH_COLLECTIONS_START,
	FETCH_COLLECTIONS_SUCCESS,
} from './collections.constants';

import {
	CollectionsFetchDataAction,
	ICollectionsState,
} from './collections.types';

export const INITIAL_STATE: ICollectionsState = {
	collectionsData: null,
	isLoading: true,
	error: null,
};

export const collectionReducer = (
	state = INITIAL_STATE,
	action: CollectionsFetchDataAction
): ICollectionsState => {
	switch (action.type) {
		case FETCH_COLLECTIONS_START:
			return {
				...state,
				isLoading: true,
			};
		case FETCH_COLLECTIONS_SUCCESS:
			return {
				...state,
				isLoading: false,
				collectionsData: action.payload.collectionsData,
			};
		case FETCH_COLLECTIONS_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload.error,
			};

		default:
			return state;
	}
};
