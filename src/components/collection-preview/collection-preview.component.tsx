import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { ICollectionClotheItem } from '../../redux/collections/collections.types';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

type Props = {
	items: Array<ICollectionClotheItem>,
	title: string,
	routeName: string,
} & RouteComponentProps;

const CollectionPreview: React.FC<Props> = ({
	items,
	title,
	routeName,
	history,
	match,
}: Props) => {
	const redirectToCollection = (event: React.MouseEvent) => {
		event.preventDefault();
		history.push(`${match.path}/${routeName}`);
	};
	return (
		<article className='collection-preview'>
			<a
				className='collection-preview__link'
				href={`${match.path}/${routeName}`}
				onClick={redirectToCollection}
			>
				<h2 className='collection-preview__title'>{title}</h2>
			</a>
			<div className='collection-preview__items-container'>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</article>
	);
};

export default withRouter(CollectionPreview);
