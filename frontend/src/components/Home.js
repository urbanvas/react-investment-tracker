import React, { useState } from 'react';
import { connect } from 'react-redux';
import InvestmentForm from './InvestmentForm';
import InvestmentContainer from './InvestmentContainer';

const Home = ({ username }) => {
	const [ showInvestmentForm, setShowInvestmentForm ] = useState(false);
	const handleNewClick = () => {
		showInvestmentForm ? setShowInvestmentForm(false) : setShowInvestmentForm(true);
	};

	return (
		<div>
			<h3>Home Container</h3>
			<p>Hello, {username}</p>
			{showInvestmentForm && <InvestmentForm />}
			<InvestmentContainer />
			<button onClick={handleNewClick}>New Investment</button>
		</div>
	);
};

const mapStatetoProps = (state) => state.user;

export default connect(mapStatetoProps, null)(Home);
