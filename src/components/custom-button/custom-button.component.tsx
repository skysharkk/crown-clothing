import React from 'react';

import './custom-button.styles.scss';

type Props = {
	children: string,
	classes: string,
};

const CustomButton: React.FC<Props> = ({ children, classes }: Props) => {
	return (
		<button type='button' className={`custom-button ${classes}`}>
			{children}
		</button>
	);
};

export default CustomButton;
