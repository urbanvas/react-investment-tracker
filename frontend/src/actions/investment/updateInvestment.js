import { UPDATE_INVESTMENT } from '../../constants/investmentConstants';

const updateInvestmentAction = (investment) => ({
	type: UPDATE_INVESTMENT,
	investment
});

export const updateInvestment = (investmentInfo) => {
	const headers = {
		method: 'PATCH',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			investment: investmentInfo
		})
	};

	return (dispatch) => {
		return fetch(`http://localhost:3000/api/v1/investments/${investmentInfo.id}`, headers)
			.then((res) => res.json())
			.then((data) => {
				dispatch(updateInvestmentAction(data));
			})
			.catch(console.log);
	};
};
