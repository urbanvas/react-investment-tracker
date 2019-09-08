import React, { useState } from 'react';
import InvestmentForm from '../InvestmentForm/InvestmentForm';
import InvestmentContainer from '../InvestmentContainer/InvestmentContainer';

const Home = () => {
	const [ showInvestmentForm, setInvestmentForm ] = useState(false);
	const handleNewClick = (e) => {
		showInvestmentForm ? setInvestmentForm(false) : setInvestmentForm(true);
	};
	return (
		<div>
			<h3>Home Container</h3>
			{showInvestmentForm && <InvestmentForm />}
			<InvestmentContainer />
			<button onClick={handleNewClick}>New Investment</button>
		</div>
	);
};

export default Home;
