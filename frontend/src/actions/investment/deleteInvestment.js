import { DELETE_INVESTMENT } from '../../constants/investmentConstants';

const deleteInvestmentAction = (id) => ({
	type: DELETE_INVESTMENT,
	id
});

export const deleteInvestment = (investmentID) => {
	const headers = {
		method: 'DELETE',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		}
	};

	return (dispatch) => {
		return fetch(`http://localhost:3000/api/v1/investments/${investmentID}`, headers)
			.then((res) => res.json())
			.then(dispatch(deleteInvestmentAction(investmentID)))
			.catch(console.log);
	};
};
