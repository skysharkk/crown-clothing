import React from 'react';
import { Link } from 'react-router-dom';
import './menu-item.styles.scss';
import { IDirectoryItemData } from '../../redux/directory/directory.types';

type Props = IDirectoryItemData;

const MenuItem: React.FC<Props> = ({
	imageUrl,
	linkUrl,
	size,
	title,
}: Props) => {
	return (
		<div className={`menu-item menu-item_${size}`}>
			<img src={imageUrl} alt='background' className='menu-item__background' />
			<Link className='menu-item__link' to={linkUrl}>
				<div className='menu-item__title-container'>
					<h2 className='menu-item__title'>{title.toUpperCase()}</h2>
					<span className='menu-item__subtitle'>SHOP NOW</span>
				</div>
			</Link>
		</div>
	);
};

export default MenuItem;
