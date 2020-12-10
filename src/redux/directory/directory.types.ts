import {
	FETCH_DIRECTORY_FAILURE,
	FETCH_DIRECTORY_START,
	FETCH_DIRECTORY_SUCCESS,
} from './directory.constants';

export type DirectoryDataType = Array<IDirectoryItemData>;

export interface IDirectoryState {
	directoryData: DirectoryDataType | null;
	isLoading: boolean;
	error: string | null;
}

export interface IDirectoryItemData {
	id: number;
	imageUrl: string;
	linkUrl: string;
	size: 'normal' | 'large';
	title: string;
}

interface IFetchDataStartAction {
	type: typeof FETCH_DIRECTORY_START;
}

interface IFetchDataSuccessAction {
	type: typeof FETCH_DIRECTORY_SUCCESS;
	payload: {
		directoryData: DirectoryDataType | null,
	};
}

interface IFetchDataFailureAction {
	type: typeof FETCH_DIRECTORY_FAILURE;
	payload: {
		error: string | null,
	};
}

export type DirectoryFetchDataAction =
	| IFetchDataStartAction
	| IFetchDataSuccessAction
	| IFetchDataFailureAction;

export type DirectoryDispatchType = (
	args: DirectoryFetchDataAction
) => DirectoryFetchDataAction;
