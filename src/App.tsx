import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop-page.component';

const App: React.FC = () => {
	return (
		<div className='App'>
			<Switch>
				<ErrorBoundary>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
				</ErrorBoundary>
			</Switch>
		</div>
	);
};

export default App;
