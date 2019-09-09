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

	return (
		<div>
			{investments.map((val, idx) => {
				return <Investment key={idx} investment={val} />;
			})}
		</div>
	);
};

const mapStatetoProps = (state) => state;

export default connect(mapStatetoProps, { indexInvestments })(InvestmentContainer);
