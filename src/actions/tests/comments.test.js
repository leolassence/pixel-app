import _ from 'lodash';

import * as commentsActions from '../comments';
import { COMMENT_ACTIONS } from '../../constants';

const data = [
  {
    action: 'createCommentRequest',
    payload: {
      postId: 'xxx',
      message: 'I like this photos !',
    },
    expectedAction: {
      type: COMMENT_ACTIONS.CREATE_COMMENT_REQUEST,
      payload: {
        postId: 'xxx',
        message: 'I like this photos !',
      },
    }
  },
  {
    action: 'createCommentSuccess',
    payload: {
      postId: 'xxx',
      title: 'My last trip in Hawaii',
    },
    expectedAction: {
      type: COMMENT_ACTIONS.CREATE_COMMENT_SUCCESS,
      payload: {
        postId: 'xxx',
        title: 'My last trip in Hawaii',
      },
    }
  },
];

describe('actions/comments', () => {
  _.values(commentsActions).forEach(fn => {
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
