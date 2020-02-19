import reducer from '../reducerAuthentification';
import { AUTH_ACTIONS } from '../../constants';

describe('reducers/reducerAuthentification', () => {
  it('should default return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isLoggedIn: false
    });
  });

  it(`should handle ${AUTH_ACTIONS.SET_AUTHENTIFICATIONS}`, () => {
    const invokeReducer = reducer([], {
      type: AUTH_ACTIONS.SET_AUTHENTIFICATIONS,
      payload: true,
    });

    expect(invokeReducer).toEqual({ isLoggedIn: true });
  });
});
