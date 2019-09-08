import {
	INDEX_INVESTMENTS,
	CREATE_INVESTMENT,
	UPDATE_INVESTMENT,
	DELETE_INVESTMENT
} from '../constants/investmentConstants';

const initialState = [];

export default function investmentReducer(state = initialState, action) {
	switch (action.type) {
		case INDEX_INVESTMENTS:
			return action.indexInvestments;
		case CREATE_INVESTMENT:
			return [ ...state, action.investment ];
		case UPDATE_INVESTMENT:
			return state.map((investment) => (investment.id === action.investment.id ? action.investment : investment));
		case DELETE_INVESTMENT:
			return state.filter((investment) => investment.id !== action.id);
		default:
			return state;
	}
}
