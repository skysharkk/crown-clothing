import { createSelector } from 'reselect';
import { AppState } from '../state.types';
import { IDirectoryState } from './directory.types';

export const selectDirectory = (state: AppState): IDirectoryState =>
	state.directory;

export const selectIsDirectoryLoading = createSelector(
	selectDirectory,
	(directory) => directory.isLoading
);
