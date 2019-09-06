import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteInvestment } from '../../actions/investment/deleteInvestment';
import UpdateInvestmentForm from '../UpdateInvestmentForm/UpdateInvestmentForm';

const Investment = ({ investment, deleteInvestment }) => {
	const [ showUpdateInvestmentForm, setUpdateInvestmentForm ] = useState(false);

	const showUpdate = (e) => {
		showUpdateInvestmentForm ? setUpdateInvestmentForm(false) : setUpdateInvestmentForm(true);
	};

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
			{showUpdateInvestmentForm && <UpdateInvestmentForm investment={investment} showUpdate={showUpdate} />}
			<button onClick={handleDelete}>Delete Investment</button>
			<button onClick={showUpdate}>Show Update Form</button>
		</div>
	);
};

export default connect(null, { deleteInvestment })(Investment);
