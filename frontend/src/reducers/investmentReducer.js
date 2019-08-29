import {
	INDEX_INVESTMENTS,
	SHOW_INVESTMENT,
	ADD_INVESTMENT,
	UPDATE_INVESTMENT,
	DELETE_INVESTMENT
} from '../constants/investmentConstants';

const initialState = {};

export default function investmentReducer(state = initialState, action) {
	switch (action.type) {
		case INDEX_INVESTMENTS:
			return '';
		case SHOW_INVESTMENT:
			return '';
		case ADD_INVESTMENT:
			return '';
		case UPDATE_INVESTMENT:
			return '';
		case DELETE_INVESTMENT:
			return '';
		default:
			return state;
	}
}
