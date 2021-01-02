import firebase from 'firebase';
import {
	FETCH_COLLECTIONS_FAILURE,
	FETCH_COLLECTIONS_START,
	FETCH_COLLECTIONS_SUCCESS,
} from './collections.constants';

export type CollectionsDataType = {
	[key: string]: ICollectionsItemData,
};

export interface ICollectionsState {
	collectionsData: CollectionsDataType | null;
	isLoading: boolean;
	error: string | null;
}

export interface ICollectionClotheItem {
	id: number;
	imageUrl: string;
	name: string;
	price: number;
}

export interface ICollectionsItemData {
	items: Array<ICollectionClotheItem>;
	title: string;
	id: string;
	routeName: string;
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

export type SnapshotType = firebase.firestore.QuerySnapshot<ICollectionsArrayDataType>;
interface ICollectionsArrayDataType {
	title: string;
	items: Array<{
		id: number,
		imageUrl: string,
		name: string,
		price: number,
	}>;
}
