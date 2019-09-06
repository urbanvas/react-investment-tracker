import React from 'react';

const Investment = ({ investment }) => {
	return (
		<div>
			<h3>{investment.name}</h3>
			<p>{investment.growth_rate}</p>
			<p>{investment.expense_rate}</p>
			<p>{investment.initial_deposit}</p>
		</div>
	);
};

export default Investment;
