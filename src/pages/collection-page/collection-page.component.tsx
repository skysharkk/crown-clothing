import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { selectCollection } from '../../redux/collections/collections.selectors';
import { AppState } from '../../redux/state.types';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { ICollectionsItemData } from '../../redux/collections/collections.types';

import './collection-page.styles.scss';

type Props = {
	collection: ICollectionsItemData | null,
};

const CollectionPage: React.FC<Props> = ({ collection }: Props) => {
	return (
		<article className='collection-page'>
			<h2 className='collection-page__title'>{collection?.title}</h2>
			<div className='collection-page__items-container'>
				{collection?.items.map((element) => (
					<CollectionItem key={element.id} item={element} />
				))}
			</div>
		</article>
	);
};

type OwnProps = RouteComponentProps<{ collectionId: string }>;
const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
