import React, { Component, ErrorInfo } from 'react';

import './error-boundary.styles.scss';

interface IState {
	hasError: boolean;
}

interface IProps {
	children: React.ReactNode;
}

class ErrorBoundary extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError(_: Error): IState {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.error('Uncaught error:', error, errorInfo);
	}

	render() {
		const { hasError } = this.state;
		if (hasError) {
			return (
				<article className='error-image'>
					<img
						src='https://i.imgur.com/yW2W9SC.png'
						alt='error'
						className='error-image__image'
					/>
					<h2 className='error-image__title'>Sorry this page is broken</h2>
				</article>
			);
		}
		const { children } = this.props;
		return children;
	}
}

export default ErrorBoundary;
