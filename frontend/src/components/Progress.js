import React from 'react';

const Progress = ({ investment }) => {
	const { name, growth_rate, expense_rate, initial_deposit } = investment;

	const calculateProgress = () => {
		const value = (time) => initial_deposit * ((1 + (growth_rate - expense_rate) / 100 / 1) ^ (time * 2));
		return {
			one: value(1),
			five: value(5),
			ten: value(10),
			twenty: value(20)
		};
	};

	const { one, five, ten, twenty } = calculateProgress();
	return (
		<div>
			<div className="title is-2 is-bold">{name}</div>
			<span className="subtitle is-6">{`Growth Rate (%): ${growth_rate}`}</span>
			<br />
			<span className="subtitle is-6">{`Expense Rate (%): ${expense_rate}`}</span>
			<br />
			<span className="subtitle is-6">{`Initial Deposit ($): ${initial_deposit}`}</span>
			<div>
				<p>1 year:</p>
				<progress className="progress is-danger" value={one} max="10000" />
			</div>
			<div>
				<p>5 years:</p>
				<progress className="progress is-danger" value={five} max="10000" />
			</div>
			<div>
				<p>10 years:</p>
				<progress className="progress is-danger" value={ten} max="10000" />
			</div>
			<div>
				<p>20 years:</p>
				<progress className="progress is-danger" value={twenty} max="10000" />
			</div>
			<br />
		</div>
	);
};

export default Progress;
