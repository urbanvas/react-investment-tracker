import React from 'react';
import { connect } from 'react-redux';
import { deleteInvestment } from '../../actions/investment/deleteInvestment';

const Investment = ({ investment, deleteInvestment }) => {
	const handleDelete = (e) => {
		e.preventDefault();
		deleteInvestment(investment.id);
	};
	return (
		<div className="notification is-danger">
			<h3>{investment.name}</h3>,
			<span>{investment.growth_rate}</span>,
			<span>{investment.expense_rate}</span>,
			<span>{investment.initial_deposit}</span>
			<button onClick={handleDelete}>Delete</button>
		</div>
	);
};

export default connect(null, { deleteInvestment })(Investment);
