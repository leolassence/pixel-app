import _ from 'lodash';

import * as usersActions from '../users';
import { USER_ACTIONS } from '../../constants';

const data = [
  {
    action: 'getUserRequest',
    payload: {
      username: 'john_doe',
    },
    expectedAction: {
      type: USER_ACTIONS.GET_USER_REQUEST,
      payload: {
        username: 'john_doe',
      },
    }
  },
  {
    action: 'getUserSuccess',
    payload: {
      userId: 'xxx',
      username: 'john_doe',
    },
    expectedAction: {
      type: USER_ACTIONS.GET_USER_SUCCESS,
      payload: {
        userId: 'xxx',
        username: 'john_doe',
      },
    }
  },
  {
    action: 'updateUserRequest',
    payload: {
      userId: 'xxx',
      formData: {},
      data: {
        username: 'john_doe',
      },
      history: {},
    },
    expectedAction: {
      type: USER_ACTIONS.UPDATE_USER_REQUEST,
      payload: {
        userId: 'xxx',
        formData: {},
        data: {
          username: 'john_doe',
        },
        history: {},
      },
    }
  },
  {
    action: 'updateUserSuccess',
    payload: {
      userId: 'xxx',
      username: 'john_doe',
    },
    expectedAction: {
      type: USER_ACTIONS.UPDATE_USER_SUCCESS,
      payload: {
        userId: 'xxx',
        username: 'john_doe',
      },
    }
  },
  {
    action: 'followUserRequest',
    payload: 'xxx',
    expectedAction: {
      type: USER_ACTIONS.FOLLOW_USER_REQUEST,
      payload: {
        userId: 'xxx',
      },
    }
  },
  {
    action: 'followUserSuccess',
    payload: {
      userId: 'xxx',
      username: 'john_doe',
    },
    expectedAction: {
      type: USER_ACTIONS.FOLLOW_USER_SUCCESS,
      payload: {
        userId: 'xxx',
        username: 'john_doe',
      },
    }
  },
  {
    action: 'getUserPostsRequest',
    payload: {
      username: 'john_doe',
      query: { userId: 'xxx' },
      options: { limit: 12 },
    },
    expectedAction: {
      type: USER_ACTIONS.GET_USER_POSTS_REQUEST,
      payload: {
        username: 'john_doe',
        query: { userId: 'xxx' },
        options: { limit: 12 },
      },
    }
  },
];

describe('actions/users', () => {
  _.values(usersActions).forEach(fn => {
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
