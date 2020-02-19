import _ from 'lodash';

import * as authentificationActions from '../authentification';
import { AUTH_ACTIONS } from '../../constants';

const data = [
  {
    action: 'setAuthentification',
    payload: true,
    expectedAction: {
      type: AUTH_ACTIONS.SET_AUTHENTIFICATIONS,
      payload: true,
    }
  },
  {
    action: 'signInUserRequest',
    payload: {
      signInId: 'www',
      password: 'xxx',
      history: {},
    },
    expectedAction: {
      type: AUTH_ACTIONS.SIGNIN_USER_REQUEST,
      payload: {
        signInId: 'www',
        password: 'xxx',
        history: {},
      },
    }
  },
  {
    action: 'signUpUserRequest',
    payload: {
      email: 'www',
      username: 'john_doe',
      password: 'xxx',
      history: {},
    },
    expectedAction: {
      type: AUTH_ACTIONS.SIGNUP_USER_REQUEST,
      payload: {
        email: 'www',
        username: 'john_doe',
        password: 'xxx',
        history: {},
      },
    }
  },
  {
    action: 'signOutUserRequest',
    payload: {
      history: {},
    },
    expectedAction: {
      type: AUTH_ACTIONS.SIGNOUT_USER_REQUEST,
      payload: {
        history: {},
      },
    }
  },
];

describe('actions/authentification', () => {
  _.values(authentificationActions).forEach(fn => {
    it(`should create action on ${fn.name}`, () => {
      const obj = data.find(({ action }) => action === fn.name);

      if (obj) {
        expect(fn(obj.payload)).toEqual(obj.expectedAction);

        const wrongAction = _.clone(obj.expectedAction);
        wrongAction.type = 'random/action';
        if (wrongAction.payload) delete wrongAction.payload[Object.keys(wrongAction)[0]];

        expect(fn(obj.payload)).not.toEqual(wrongAction);
      }
    });
  });
});
