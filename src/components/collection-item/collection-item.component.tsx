import React from 'react';

import { ICollectionClotheItem } from '../../redux/collections/collections.types';

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

type Props = { item: ICollectionClotheItem };

const CollectionItem: React.FC<Props> = ({
	item: { imageUrl, name, price },
}: Props) => {
	return (
		<div className='collection-item'>
			<div className='collection-item__btn-container'>
				<img src={imageUrl} alt={name} className='collection-item__img' />
				<CustomButton classes='collection-item__btn'>add to cart</CustomButton>
			</div>
			<div className='collection-item__info-container'>
				<span className='collection-item__name'>{name}</span>
				<span className='collection-item__price'>$ {price}</span>
			</div>
		</div>
	);
};

export default CollectionItem;
