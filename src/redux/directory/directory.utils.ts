import { Dispatch } from 'react';
import { AppActions } from '../state.types';
import { getCollectionDataArray } from '../../firebase/firebase.utils';
import { IDirectoryItemData } from './directory.types';
import {
	fetchDirectoryFailure,
	fetchDirectoryStart,
	fetchDirectorySuccess,
} from './directory.actions';

export default function addDirectory() {
	return async (dispatch: Dispatch<AppActions>): Promise<void> => {
		dispatch(fetchDirectoryStart());
		try {
			const directoryData = await getCollectionDataArray<IDirectoryItemData>(
				'directory',
				'id'
			);
			dispatch(fetchDirectorySuccess(directoryData));
		} catch (error) {
			dispatch(fetchDirectoryFailure(error));
		}
	};
}
