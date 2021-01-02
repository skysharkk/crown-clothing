import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { selectIsCollectionsLoading } from '../../redux/collections/collections.selectors';

import { AppState } from '../../redux/state.types';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';

type CollectionLoadingType = ReturnType<typeof selectIsCollectionsLoading>;

const mapStateToProps = createStructuredSelector<
	AppState,
	AppState,
	{ isLoading: CollectionLoadingType }
>({
	isLoading: selectIsCollectionsLoading,
});

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionOverview);

// eslint-disable-next-line prettier/prettier
export default CollectionsOverviewContainer as React.ComponentType;
