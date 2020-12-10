import {
	FETCH_COLLECTIONS_FAILURE,
	FETCH_COLLECTIONS_START,
	FETCH_COLLECTIONS_SUCCESS,
} from './collections.constants';
import {
	CollectionsDataType,
	CollectionsFetchDataAction,
} from './collections.types';

export const fetchCollectionsStart = (): CollectionsFetchDataAction => ({
	type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (
	data: CollectionsDataType | null
): CollectionsFetchDataAction => ({
	type: FETCH_COLLECTIONS_SUCCESS,
	payload: {
		collectionsData: data,
	},
});

export const fetchCollectionsFailure = (
	error: string
): CollectionsFetchDataAction => ({
	type: FETCH_COLLECTIONS_FAILURE,
	payload: {
		error,
	},
});
