import React, { useState } from 'react';
import { connect } from 'react-redux';
import InvestmentForm from './InvestmentForm';
import InvestmentContainer from './InvestmentContainer';

const Home = ({ username }) => {
	const [ showInvestmentForm, setShowInvestmentForm ] = useState(false);
	const handleNewClick = () => {
		showInvestmentForm ? setShowInvestmentForm(false) : setShowInvestmentForm(true);
	};

	return (
		<div className="columns">
			<div className="column container is-fluid">
				<div className="message is-primary">
					<p className="message-header">Hello, {username}</p>
					<div className="message-body">
						<p className="menu-label">Add new investments here:</p>
						<button className="button is-primary" onClick={handleNewClick}>
							New Investment Form
						</button>
					</div>
				</div>
			</div>
			<div className="column is-8 container is-fluid">
				{showInvestmentForm && <InvestmentForm />}
				<InvestmentContainer />
			</div>
			<div className="column" />
		</div>
	);
};

const mapStatetoProps = (state) => state.user;

export default connect(mapStatetoProps, null)(Home);
