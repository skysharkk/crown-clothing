import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/collections/collections.selectors';

import { ICollectionsItemData } from '../../redux/collections/collections.types';
import { AppState } from '../../redux/state.types';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-overview.styles.scss';

type Props = IMapStateToPropsTypes;

interface IMapStateToPropsTypes {
	collectionForPreview: Array<ICollectionsItemData>;
}

const CollectionOverview: React.FC<Props> = ({
	collectionForPreview,
}: Props) => {
	return (
		<div className='collection-overview'>
			{collectionForPreview.map(({ id, items, title, routeName }) => (
				<CollectionPreview
					key={id}
					items={items}
					title={title}
					routeName={routeName}
				/>
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector<
	AppState,
	IMapStateToPropsTypes
>({
	collectionForPreview: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
