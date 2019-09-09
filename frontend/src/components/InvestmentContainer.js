import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Investment from './Investment';
import { indexInvestments } from '../actions/investment/indexInvestment';

const InvestmentContainer = ({ indexInvestments, investments }) => {
	useEffect(() => {
		indexInvestments();
	}, []);

	const mappedInvestments = [];

	if (investments.length > 0) {
		mappedInvestments.push(
			investments.map((val, idx) => {
				return <Investment key={idx} investment={val} />;
			})
		);
	}

	return <div>{mappedInvestments}</div>;
};

const mapStatetoProps = (state) => state;

export default connect(mapStatetoProps, { indexInvestments })(InvestmentContainer);
