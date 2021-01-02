import { CombinedState } from 'redux';
import { createSelector, OutputSelector } from 'reselect';
import { IDirectoryState } from '../directory/directory.types';
import { AppState } from '../state.types';
import {
	CollectionsDataType,
	ICollectionsItemData,
	ICollectionsState,
} from './collections.types';

export const selectCollections = (state: AppState): ICollectionsState =>
	state.collections;

export const selectIsCollectionsLoading = createSelector(
	selectCollections,
	(collections) => collections.isLoading
);

export const selectCollectionsData = createSelector(
	selectCollections,
	(collections) => collections.collectionsData
);

export const selectCollectionsForPreview = createSelector(
	selectCollectionsData,
	(collectionsData) =>
		collectionsData
			? Object.keys(collectionsData).map((key) => {
					return {
						...collectionsData[key],
						items: collectionsData[key].items.filter((_, index) => index < 4),
					};
			  })
			: []
);

export const selectCollection = (
	collectionUrlParam: string
): OutputSelector<
	CombinedState<{ directory: IDirectoryState, collections: ICollectionsState }>,
	ICollectionsItemData | null,
	(res: CollectionsDataType | null) => ICollectionsItemData | null
> =>
	createSelector(selectCollectionsData, (collectionsData) =>
		collectionsData ? collectionsData[collectionUrlParam] : null
	);
