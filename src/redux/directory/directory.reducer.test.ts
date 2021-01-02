import { INITIAL_STATE, directoryReducer } from './directory.reducer';
import {
	FETCH_DIRECTORY_FAILURE,
	FETCH_DIRECTORY_START,
	FETCH_DIRECTORY_SUCCESS,
} from './directory.constants';
import { DirectoryDataType } from './directory.types';

describe('directoryReducer', () => {
	it('should set isLoading to payload on fetchDirectoryStart action', () => {
		expect(
			directoryReducer(INITIAL_STATE, { type: FETCH_DIRECTORY_START })
		).toEqual({ ...INITIAL_STATE, isLoading: true });
	});

	it('should set isLoading and directoryData to payload on fetchDirectorySuccess action', () => {
		const mockDirectoryData: DirectoryDataType = [
			{
				id: 1,
				imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
				linkUrl: 'shop/hats',
				size: 'normal',
				title: 'hats',
			},
		];

		expect(
			directoryReducer(INITIAL_STATE, {
				type: FETCH_DIRECTORY_SUCCESS,
				payload: {
					directoryData: mockDirectoryData,
				},
			})
		).toEqual({
			...INITIAL_STATE,
			isLoading: false,
			directoryData: mockDirectoryData,
		});
	});

	it('should set isLoading and error to payload on fetchDirectoryFailure action', () => {
		expect(
			directoryReducer(INITIAL_STATE, {
				type: FETCH_DIRECTORY_FAILURE,
				payload: {
					error: 'error',
				},
			})
		).toEqual({ ...INITIAL_STATE, isLoading: false, error: 'error' });
	});
});
