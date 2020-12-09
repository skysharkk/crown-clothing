import React from 'react';
import { connect } from 'react-redux';
import { selectDirectory } from '../../redux/directory/directory.selectors';

import { IDirectoryState } from '../../redux/directory/directory.types';
import { AppState } from '../../redux/state.types';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

interface IStateProps {
	directory: IDirectoryState;
}

type Props = IStateProps;

const Directory: React.FC<Props> = ({
	directory: { directoryData, error },
}: Props) => {
	if (error) {
		throw new Error(error);
	}
	return (
		<article className='directory-container'>
			{directoryData &&
				directoryData.map(({ id, imageUrl, linkUrl, size, title }) => (
					<MenuItem
						key={id}
						id={id}
						imageUrl={imageUrl}
						linkUrl={linkUrl}
						size={size}
						title={title}
					/>
				))}
		</article>
	);
};

const mapStateToProps = (state: AppState) => ({
	directory: selectDirectory(state),
});

export default connect(mapStateToProps)(Directory);
