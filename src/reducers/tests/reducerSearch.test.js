import reducer from '../reducerSearch';
import { SEARCH_ACTIONS } from '../../constants';

describe('reducers/reducerSearch', () => {
  it('should default return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      searchResults: [],
    });
  });

  it(`should handle ${SEARCH_ACTIONS.SEARCH_SUCCESS}`, () => {
    const searchResults = [
      {
        type: 'post',
        title: 'a title'
      },
      {
        type: 'user',
        username: 'john doe'
      },
    ];

    const invokeReducer = reducer({}, {
      type: SEARCH_ACTIONS.SEARCH_SUCCESS,
      payload: searchResults,
    });

    expect(invokeReducer).toEqual({ searchResults });
  });
});
