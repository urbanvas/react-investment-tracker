import React, { useState } from 'react';
import Input from './Input';
import Form from './Form';
import { connect } from 'react-redux';
import { createInvestment } from '../actions/investment/createInvestment';

const InvestmentForm = ({ createInvestment, handleClick }) => {
	const [ name, setName ] = useState('');
	const [ growth_rate, setGrowthRate ] = useState(0);
	const [ expense_rate, setExpenseRate ] = useState(0);
	const [ initial_deposit, setInitialDeposit ] = useState(0);
	const handleSubmit = (e) => {
		e.preventDefault();
		createInvestment({ name, growth_rate, expense_rate, initial_deposit });
		handleClick();
	};

	return (
		<Form classes="signup" buttonText="Create Investment" handleSubmit={handleSubmit}>
			<Input
				attr="Name"
				handleChange={setName}
				value={name}
				inputClassArr={[ 'input', 'is-rounded', 'is-primary' ]}
				labelClassArr={[ 'label' ]}
			/>
			<Input
				attr="Growth Rate (%)"
				handleChange={setGrowthRate}
				value={growth_rate}
				inputClassArr={[ 'input', 'is-rounded', 'is-primary' ]}
				labelClassArr={[ 'label' ]}
			/>
			<Input
				attr="Expense Rate (%)"
				handleChange={setExpenseRate}
				value={expense_rate}
				inputClassArr={[ 'input', 'is-rounded', 'is-primary' ]}
				labelClassArr={[ 'label' ]}
			/>
			<Input
				attr="Initial Deposit ($)"
				handleChange={setInitialDeposit}
				value={initial_deposit}
				inputClassArr={[ 'input', 'is-rounded', 'is-primary' ]}
				labelClassArr={[ 'label' ]}
			/>
		</Form>
	);
};

export default connect(null, { createInvestment })(InvestmentForm);
