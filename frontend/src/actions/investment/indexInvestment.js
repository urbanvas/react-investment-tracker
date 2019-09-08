import { INDEX_INVESTMENTS } from '../../constants/investmentConstants';

const indexInvestmentAction = (indexInvestments) => ({
	type: INDEX_INVESTMENTS,
	indexInvestments
});

export const indexInvestments = () => {
	const headers = {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		}
	};

	return (dispatch) => {
		return fetch('http://localhost:3000/api/v1/investments', headers)
			.then((res) => res.json())
			.then((data) => dispatch(indexInvestmentAction(data)))
			.catch(console.log);
	};
};
