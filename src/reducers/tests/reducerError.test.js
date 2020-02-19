import reducer from '../reducerError';
import { ERROR_ACTIONS } from '../../constants';

describe('reducers/reducerError', () => {
  it('should default return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      message: ''
    });
  });

  it(`should handle ${ERROR_ACTIONS.PARSE_ERROR}`, () => {
    const invokeReducer = reducer([], {
      type: ERROR_ACTIONS.PARSE_ERROR,
      payload: {
        error: 'Wrong credentials'
      },
    });

    expect(invokeReducer).toEqual({ message: 'Wrong credentials' });

    const invokeReducer2 = reducer([], {
      type: ERROR_ACTIONS.PARSE_ERROR,
      payload: {
        error: 'You must be LoggedIn'
      },
    });

    expect(invokeReducer2).toEqual({ message: 'You must be LoggedIn' });
  });

  it(`should handle ${ERROR_ACTIONS.RESET_ERROR}`, () => {
    const invokeReducer = reducer([], {
      type: ERROR_ACTIONS.RESET_ERROR,
    });

    expect(invokeReducer).toEqual({ message: '' });

    reducer([], {
      type: ERROR_ACTIONS.PARSE_ERROR,
      payload: {
        error: 'You must be LoggedIn'
      },
    });

    const resetReducer = reducer([], {
      type: ERROR_ACTIONS.RESET_ERROR,
    });

    expect(resetReducer).toEqual({ message: '' });
  });
});
