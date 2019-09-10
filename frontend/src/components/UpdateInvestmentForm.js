import React, { useState } from 'react';
import Input from './Input';
import Form from './Form';
import { connect } from 'react-redux';
import { updateInvestment } from '../actions/investment/updateInvestment';

const UpdateInvestmentForm = ({ investment, updateInvestment, showUpdate }) => {
	const [ name, setName ] = useState(investment.name);
	const [ growth_rate, setGrowthRate ] = useState(investment.growth_rate);
	const [ expense_rate, setExpenseRate ] = useState(investment.expense_rate);
	const [ initial_deposit, setInitialDeposit ] = useState(investment.initial_deposit);
	const handleSubmit = (e) => {
		updateInvestment({ id: investment.id, name, growth_rate, expense_rate, initial_deposit });
	};
	return (
		<Form
			classes="signup"
			buttonText="Update Investment"
			handleSubmit={(e) => {
				e.preventDefault();
				handleSubmit(e);
				showUpdate();
			}}
		>
			<Input
				attr="name"
				handleChange={setName}
				value={name}
				inputClassArr={[ 'input', 'is-rounded', 'is-primary' ]}
				labelClassArr={[ 'label' ]}
			/>
			<Input
				attr="Growth Rate"
				handleChange={setGrowthRate}
				value={growth_rate}
				inputClassArr={[ 'input', 'is-rounded', 'is-primary' ]}
				labelClassArr={[ 'label' ]}
			/>
			<Input
				attr="Expense Rate"
				handleChange={setExpenseRate}
				value={expense_rate}
				inputClassArr={[ 'input', 'is-rounded', 'is-primary' ]}
				labelClassArr={[ 'label' ]}
			/>
			<Input
				attr="Initial Deposit"
				handleChange={setInitialDeposit}
				value={initial_deposit}
				inputClassArr={[ 'input', 'is-rounded', 'is-primary' ]}
				labelClassArr={[ 'label' ]}
			/>
		</Form>
	);
};

export default connect(null, { updateInvestment })(UpdateInvestmentForm);
