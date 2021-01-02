import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Directory from './directory.component';
import WithSpinner from '../with-spinner/with-spinner.component';
import { selectIsDirectoryLoading } from '../../redux/directory/directory.selectors';
import { AppState } from '../../redux/state.types';

type DirectoryLoadingType = ReturnType<typeof selectIsDirectoryLoading>;

const mapStateToProps = createStructuredSelector<
	AppState,
	{ isLoading: DirectoryLoadingType }
>({
	isLoading: selectIsDirectoryLoading,
});

const DirectoryContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(Directory);

// eslint-disable-next-line prettier/prettier
export default DirectoryContainer as React.ComponentType;
  