import { AppState } from '../state.types';
import { ICollectionsState } from './collections.types';

// eslint-disable-next-line import/prefer-default-export
export const selectCollections = (state: AppState): ICollectionsState =>
	state.collections;
