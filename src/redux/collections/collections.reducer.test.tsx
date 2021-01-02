import {
	FETCH_COLLECTIONS_FAILURE,
	FETCH_COLLECTIONS_START,
	FETCH_COLLECTIONS_SUCCESS,
} from './collections.constants';
import { collectionReducer, INITIAL_STATE } from './collections.reducer';

describe('collectionReducer', () => {
	it('should set isLoading to payload on fetchCollectionStart action', () => {
		expect(
			collectionReducer(INITIAL_STATE, { type: FETCH_COLLECTIONS_START })
		).toEqual({ ...INITIAL_STATE, isLoading: true });
	});

	it('should set isLoading and collectionsData to payload on fetchCollectionSuccess action', () => {
		const mockCollectionsData = {
			jackets: {
				title: 'Jackets',
				id: '0xvPxJaAkew7ZZ7GHsLW',
				routeName: 'jackets',
				items: [
					{
						id: 18,
						imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
						name: 'Black Jean Shearling',
						price: 125,
					},
				],
			},
		};

		expect(
			collectionReducer(INITIAL_STATE, {
				type: FETCH_COLLECTIONS_SUCCESS,
				payload: {
					collectionsData: mockCollectionsData,
				},
			})
		).toEqual({
			...INITIAL_STATE,
			isLoading: false,
			collectionsData: mockCollectionsData,
		});
	});

	it('should set isLoading and error to payload on fetchCollectionFailure action', () => {
		expect(
			collectionReducer(INITIAL_STATE, {
				type: FETCH_COLLECTIONS_FAILURE,
				payload: {
					error: 'error',
				},
			})
		).toEqual({ ...INITIAL_STATE, isLoading: false, error: 'error' });
	});
});
