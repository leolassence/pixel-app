import reducer from '../reducerUser';
import { USER_ACTIONS } from '../../constants';

describe('reducers/reducerUser', () => {
  it('should default return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      user: {}
    });
  });

  it(`should handle ${USER_ACTIONS.GET_USER_SUCCESS}`, () => {
    const user = {
      userId: 'xxx',
      username: 'john_doe',
    };

    const state = {
      user: {},
    };

    const invokeReducer = reducer(state, {
      type: USER_ACTIONS.GET_USER_SUCCESS,
      payload: user,
    });

    expect(invokeReducer).toEqual({ user });
  });

  it(`should handle ${USER_ACTIONS.UPDATE_USER_SUCCESS}`, () => {
    const user = {
      userId: 'xxx',
      username: 'john_doe',
    };

    const state = {
      user: {
        userId: 'xxx',
        username: 'john',
      },
    };

    const invokeReducer = reducer(state, {
      type: USER_ACTIONS.UPDATE_USER_SUCCESS,
      payload: user,
    });

    expect(invokeReducer).toEqual({ user });
  });

  it(`should handle ${USER_ACTIONS.FOLLOW_USER_SUCCESS}`, () => {
    const user = {
      userId: 'xxx',
      username: 'john_doe',
    };

    const state = {
      user: {
        userId: 'xxx',
        username: 'john',
      },
    };

    const invokeReducer = reducer(state, {
      type: USER_ACTIONS.FOLLOW_USER_SUCCESS,
      payload: user,
    });

    expect(invokeReducer).toEqual({ user });
  });
});
