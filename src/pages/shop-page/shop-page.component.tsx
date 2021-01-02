import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import addCollections from '../../redux/collections/collections.utils';

import { AppActions } from '../../redux/state.types';

import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPage from '../collection-page/collection-page.component';

interface IDispatchProps {
	startAddCollections: () => void;
}

type Props = IDispatchProps & RouteComponentProps;

const ShopPage: React.FC<Props> = ({ match, startAddCollections }: Props) => {
	useEffect(() => {
		startAddCollections();
	}, [startAddCollections]);
	return (
		<section>
			<Route
				exact
				path={`${match.path}`}
				component={CollectionsOverviewContainer}
			/>
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		</section>
	);
};

const mapDispatchToProps = (
	dispatch: ThunkDispatch<any, any, AppActions>
): IDispatchProps => ({
	startAddCollections: bindActionCreators(addCollections, dispatch),
});

export default connect(null, mapDispatchToProps)(ShopPage);
