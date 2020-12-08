import {
	FETCH_DIRECTORY_FAILURE,
	FETCH_DIRECTORY_START,
	FETCH_DIRECTORY_SUCCESS,
} from './directory.constants';
import { DirectoryFetchDataAction, DirectoryDataType } from './directory.types';

export const fetchDirectoryStart = (): DirectoryFetchDataAction => ({
	type: FETCH_DIRECTORY_START,
});

export const fetchDirectorySuccess = (
	data: DirectoryDataType | null
): DirectoryFetchDataAction => ({
	type: FETCH_DIRECTORY_SUCCESS,
	payload: {
		directoryData: data,
	},
});

export const fetchDirectoryFailure = (
	error: string
): DirectoryFetchDataAction => ({
	type: FETCH_DIRECTORY_FAILURE,
	payload: {
		error,
	},
});
