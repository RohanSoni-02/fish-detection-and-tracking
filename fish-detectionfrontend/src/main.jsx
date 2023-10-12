import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReactDOM from 'react-dom/client'

//Import page components
const SignInSignUp = React.lazy(() => import('./components/SignInSignUp.jsx'));
const History = React.lazy(() => import('./components/History.jsx'));
const Upload = React.lazy(() => import('./components/Upload.jsx'));
const Analytics = React.lazy(() => import('./AnalyticsScreen.jsx'));

//Authentication
const Authentication = React.lazy(() => import('./components/Authentication.jsx'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Main />
);

export default function Main() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<SignInSignUp />} />
				<Route path="/history" element={<History />} />
				<Route path="/upload" element={<Upload />} />
				<Route path="/analytics" element={<Analytics />} />
			</Routes>
		</BrowserRouter>
	);
}
