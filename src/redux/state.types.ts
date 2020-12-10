import { CollectionsFetchDataAction } from './collections/collections.types';
import { DirectoryFetchDataAction } from './directory/directory.types';
import rootReducer from './root-reducer';

export type AppState = ReturnType<typeof rootReducer>;
export type AppActions = DirectoryFetchDataAction | CollectionsFetchDataAction;
