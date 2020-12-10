import { Dispatch } from 'react';
import { getCollectionDataArray } from '../../firebase/firebase.utils';
import { AppActions } from '../state.types';
import {
	fetchCollectionsStart,
	fetchCollectionsSuccess,
	fetchCollectionsFailure,
} from './collections.actions';
import { ICollectionsItemData } from './collections.types';

export default function addCollections() {
	return async (dispatch: Dispatch<AppActions>): Promise<void> => {
		dispatch(fetchCollectionsStart());
		try {
			const dataCollections = await getCollectionDataArray<ICollectionsItemData>(
				'collections'
			);
			dispatch(fetchCollectionsSuccess(dataCollections));
		} catch (error) {
			dispatch(fetchCollectionsFailure(error));
		}
	};
}
