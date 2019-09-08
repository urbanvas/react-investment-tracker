// import React, { useEffect, useState } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import Investment from '../Investment/Investment';
// import { indexInvestments } from '../../actions/investment/indexInvestment';

const InvestmentContainer = ({ user }) => {
	let mappedInvestments = [];

	const mappedInvestmentsfn = () => {
		if (Object.keys(user).length > 0) {
			mappedInvestments.push(
				user.investments.map((val, idx) => {
					return <Investment key={idx} investment={val} />;
				})
			);
		}
	};

	mappedInvestmentsfn();

	return <div>{mappedInvestments}</div>;
};

const mapStatetoProps = (state) => state;

export default connect(mapStatetoProps, null)(InvestmentContainer);
