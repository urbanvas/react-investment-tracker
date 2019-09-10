import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { deleteInvestment } from '../actions/investment/deleteInvestment';
import UpdateInvestmentForm from './UpdateInvestmentForm';

const Investment = ({ investment, deleteInvestment }) => {
	const [ showUpdateInvestmentForm, setUpdateInvestmentForm ] = useState(false);
	const { name, growth_rate, expense_rate, initial_deposit, id } = investment;

	const showUpdate = (e) => {
		showUpdateInvestmentForm ? setUpdateInvestmentForm(false) : setUpdateInvestmentForm(true);
	};

	const handleDelete = (e) => {
		e.preventDefault();
		console.log('hiii');
		deleteInvestment(id);
	};
	// className="notification is-danger"
	// moving the delete button to one dive higher makes it not work anymore, add a delete class to make it a delete button
	return (
		<Fragment>
			<section className="hero is-primary is-bold">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">{name}</h1>
						<h2 className="subtitle">{growth_rate}</h2>
						<h2 className="subtitle">{expense_rate}</h2>
						<h2 className="subtitle">{initial_deposit}</h2>
						<button className="button is-warning" onClick={showUpdate}>
							Show Update Form
						</button>
						<button className="button is-warning" onClick={handleDelete}>
							Delete Investment
						</button>
						{showUpdateInvestmentForm && (
							<UpdateInvestmentForm investment={investment} showUpdate={showUpdate} />
						)}
					</div>
				</div>
			</section>
			<br />
		</Fragment>
	);
};

export default connect(null, { deleteInvestment })(Investment);
