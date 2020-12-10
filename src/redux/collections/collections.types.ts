import {
	FETCH_COLLECTIONS_FAILURE,
	FETCH_COLLECTIONS_START,
	FETCH_COLLECTIONS_SUCCESS,
} from './collections.constants';

export type CollectionsDataType = Array<ICollectionsItemData>;

export interface ICollectionsState {
	collectionsData: CollectionsDataType | null;
	isLoading: boolean;
	error: string | null;
}

export interface ICollectionsItemData {
	items: Array<{
		id: number,
		imageUrl: string,
		name: string,
		price: number,
	}>;
	title: string;
}

interface IFetchDataStartAction {
	type: typeof FETCH_COLLECTIONS_START;
}

interface IFetchDataSuccessAction {
	type: typeof FETCH_COLLECTIONS_SUCCESS;
	payload: {
		collectionsData: CollectionsDataType | null,
	};
}

interface IFetchDataFailureAction {
	type: typeof FETCH_COLLECTIONS_FAILURE;
	payload: {
		error: string | null,
	};
}

export type CollectionsFetchDataAction =
	| IFetchDataStartAction
	| IFetchDataSuccessAction
	| IFetchDataFailureAction;

export type CollectionsDispatchType = (
	args: CollectionsFetchDataAction
) => CollectionsFetchDataAction;
