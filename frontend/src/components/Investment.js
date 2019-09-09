import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteInvestment } from '../actions/investment/deleteInvestment';
import UpdateInvestmentForm from './UpdateInvestmentForm';

const Investment = ({ investment, deleteInvestment }) => {
	const [ showUpdateInvestmentForm, setUpdateInvestmentForm ] = useState(false);
	const { name, growth_rate, expense_rate, initial_deposit } = investment;

	const showUpdate = (e) => {
		showUpdateInvestmentForm ? setUpdateInvestmentForm(false) : setUpdateInvestmentForm(true);
	};

	const handleDelete = (e) => {
		e.preventDefault();
		deleteInvestment(investment.id);
	};
	return (
		<div className="notification is-danger">
			<h3>{name}</h3>,
			<span>{growth_rate}</span>,
			<span>{expense_rate}</span>,
			<span>{initial_deposit}</span>
			<button className="button is-warning" onClick={handleDelete}>
				Delete Investment
			</button>
			<button className="button is-warning" onClick={showUpdate}>
				Show Update Form
			</button>
			{showUpdateInvestmentForm && <UpdateInvestmentForm investment={investment} showUpdate={showUpdate} />}
		</div>
	);
};

export default connect(null, { deleteInvestment })(Investment);
