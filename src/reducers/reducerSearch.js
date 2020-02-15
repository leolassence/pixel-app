import { SEARCH_ACTIONS } from '../constants';

const initialState = {
  searchResults: [],
};

export default function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ACTIONS.SEARCH: {
      return {
        ...state,
        searchResults: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
