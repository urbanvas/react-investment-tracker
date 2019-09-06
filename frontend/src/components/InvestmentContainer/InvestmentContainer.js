import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Investment from '../Investment/Investment';
import { indexInvestments } from '../../actions/investment/indexInvestment';

const InvestmentContainer = ({ indexInvestments, investments }) => {
	const fetchData = async () => {
		await indexInvestments();
	};

	useEffect(() => {
		fetchData();
	}, []);

	const mappedInvestments = investments.map((val, idx) => {
		return <Investment key={idx} investment={val} />;
	});
	return <div>{mappedInvestments}</div>;
};

const mapStatetoProps = (state) => state;

export default connect(mapStatetoProps, { indexInvestments })(InvestmentContainer);
