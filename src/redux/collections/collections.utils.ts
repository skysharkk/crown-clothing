import { Dispatch } from 'react';
import { dataBase } from '../../firebase/firebase.utils';
import { AppActions } from '../state.types';
import {
	fetchCollectionsStart,
	fetchCollectionsSuccess,
	fetchCollectionsFailure,
} from './collections.actions';
import { CollectionsDataType, SnapshotType } from './collections.types';



export function transformCollectionsData(
	snapshot: SnapshotType
): CollectionsDataType {
	const transformedData = snapshot.docs.map((doc) => {
		const { title, items } = doc.data();
		return {
			title,
			id: doc.id,
			routeName: encodeURI(title.toLowerCase()),
			items,
		};
	});
	return transformedData.reduce((acc, items) => {
		acc[items.title.toLowerCase()] = items;
		return acc;
	// eslint-disable-next-line prettier/prettier
	}, {} as CollectionsDataType);
}


export default function addCollections() {
	return async (dispatch: Dispatch<AppActions>): Promise<void> => {
    const collectionRef = dataBase.collection('collections');
    dispatch(fetchCollectionsStart());
		try {
      const snapshot = await collectionRef.get() as SnapshotType;
      const data = transformCollectionsData(snapshot);
			dispatch(fetchCollectionsSuccess(data));
		} catch (error) {
			dispatch(fetchCollectionsFailure(error));
		}
	};
}
