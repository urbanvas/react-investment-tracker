import { CREATE_INVESTMENT } from '../../constants/investmentConstants';

const createInvestmentAction = (investment) => ({
	type: CREATE_INVESTMENT,
	investment
});

export const createInvestment = (investmentInfo) => {
	const headers = {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			investment: investmentInfo
		})
	};
	return (dispatch) => {
		return fetch('http://localhost:3000/api/v1/investments', headers)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				dispatch(createInvestmentAction(data));
			})
			.catch(console.log);
	};
};
