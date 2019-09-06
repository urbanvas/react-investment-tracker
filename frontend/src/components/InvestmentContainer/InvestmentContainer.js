import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Investment from '../Investment/Investment';
import { indexInvestments } from '../../actions/investment/indexInvestment';

const InvestmentContainer = ({ investmentsArr, indexInvestments }) => {
	const [ investments, setInvestments ] = useState('');

	// perhaps dont useeffect and just make a async function
	const loadCustomer = async ({ customerId }, { signal }) => {
		const res = await fetch(`/api/customers/${customerId}`, { signal });
		if (!res.ok) throw new Error(res);
		return res.json();
	};

	//////////////////////////////
	useEffect(() => {
		const fetchData = async () => {
			const result = await indexInvestments();
			setInvestments(result);
		};
		fetchData();
	}, []);
	// investments.map((val, idx) => {
	// 	return <Investment key={idx} investment={val} />;
	// });
	return <div />;
};

export default connect(null, { indexInvestments })(InvestmentContainer);
