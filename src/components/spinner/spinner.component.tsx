import React from 'react';

import './spinner.styles.scss';

const Spinner: React.FC = () => {
	return (
		<div className='spinner-overlay'>
			<div className='spinner' />
		</div>
	);
};

export default Spinner;
