import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Investment from '../Investment/Investment';
import { indexInvestments } from '../../actions/investment/indexInvestment';

const InvestmentContainer = ({ indexInvestments, investments }) => {
	useEffect(() => {
		indexInvestments();
	}, []);

	let mappedInvestments = [];
	const mappedInvestmentsfn = () => {
		if (investments.length > 0) {
			mappedInvestments.push(
				investments.map((val, idx) => {
					return <Investment key={idx} investment={val} />;
				})
			);
		}
	};

	mappedInvestmentsfn();

	return <div>{mappedInvestments}</div>;
};

const mapStatetoProps = (state) => state;

export default connect(mapStatetoProps, { indexInvestments })(InvestmentContainer);
