import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Investment from './Investment';
import { indexInvestments } from '../actions/investment/indexInvestment';

const InvestmentContainer = ({ indexInvestments, investments }) => {
	useEffect(
		() => {
			indexInvestments();
		},
		[ indexInvestments ]
	);

	// why cant i put this in a use effect?
	const mappedInvestments = [];

	if (investments.length > 0) {
		mappedInvestments.push(
			investments.map((val, idx) => {
				return <Investment key={idx} investment={val} />;
			})
		);
	}
	//////

	return <div>{mappedInvestments}</div>;
};

const mapStatetoProps = (state) => state;

export default connect(mapStatetoProps, { indexInvestments })(InvestmentContainer);
