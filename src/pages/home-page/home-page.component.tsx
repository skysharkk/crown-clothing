import React, { useEffect } from 'react';

import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

import DirectoryContainer from '../../components/directory/directory.container';

import addDirectory from '../../redux/directory/directory.utils';
import { AppActions } from '../../redux/state.types';

interface IDispatchProps {
	startAddDirectory: () => void;
}
type Props = IDispatchProps;

const HomePage: React.FC<Props> = ({ startAddDirectory }: Props) => {
	useEffect(() => {
		startAddDirectory();
	}, [startAddDirectory]);
	return (
		<div>
			<DirectoryContainer />
		</div>
	);
};

const mapDispatchToProps = (
	dispatch: ThunkDispatch<any, any, AppActions>
): IDispatchProps => ({
	startAddDirectory: bindActionCreators(addDirectory, dispatch),
});

export default connect(null, mapDispatchToProps)(HomePage);
