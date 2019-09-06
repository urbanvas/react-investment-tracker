import {
	INDEX_INVESTMENTS,
	SHOW_INVESTMENT,
	CREATE_INVESTMENT,
	UPDATE_INVESTMENT,
	DELETE_INVESTMENT
} from '../constants/investmentConstants';

const initialState = [];

export default function investmentReducer(state = initialState, action) {
	switch (action.type) {
		case INDEX_INVESTMENTS:
			return [ ...action.indexInvestments ];
		case SHOW_INVESTMENT:
			return '';
		case CREATE_INVESTMENT:
			return [ ...state, action.investment ];
		case UPDATE_INVESTMENT:
			return '';
		case DELETE_INVESTMENT:
			return '';
		default:
			return state;
	}
}
