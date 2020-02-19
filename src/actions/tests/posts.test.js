import _ from 'lodash';

import * as postsActions from '../posts';
import { POST_ACTIONS } from '../../constants';

const data = [
  {
    action: 'getPostsRequest',
    payload: {
      query: { userId: 'xxx' },
      options: { limit: 12 },
    },
    expectedAction: {
      type: POST_ACTIONS.GET_POSTS_REQUEST,
      payload: {
        query: { userId: 'xxx' },
        options: { limit: 12 },
      },
    }
  },
  {
    action: 'getPostsSuccess',
    payload: {
      title: 'Photo from last trip in USA',
    },
    expectedAction: {
      type: POST_ACTIONS.GET_POSTS_SUCCESS,
      payload: {
        title: 'Photo from last trip in USA',
      },
    }
  },
  {
    action: 'getPostRequest',
    payload: {
      postId: 'xxx',
      history: {},
    },
    expectedAction: {
      type: POST_ACTIONS.GET_POST_REQUEST,
      payload: {
        postId: 'xxx',
        history: {},
      },
    }
  },
  {
    action: 'getPostSuccess',
    payload: {
      title: 'Photo from last trip in USA',
    },
    expectedAction: {
      type: POST_ACTIONS.GET_POST_SUCCESS,
      payload: {
        title: 'Photo from last trip in USA',
      },
    }
  },
  {
    action: 'createPostRequest',
    payload: {
      formData: {},
      data: {
        title: 'Photo from last trip in USA',
      },
      history: {},
    },
    expectedAction: {
      type: POST_ACTIONS.CREATE_POST_REQUEST,
      payload: {
        formData: {},
        data: {
          title: 'Photo from last trip in USA',
        },
        history: {},
      },
    }
  },
  {
    action: 'createPostSuccess',
    payload: {
      title: 'Photo from last trip in USA',
    },
    expectedAction: {
      type: POST_ACTIONS.CREATE_POST_SUCCESS,
      payload: {
        title: 'Photo from last trip in USA',
      },
    }
  },
  {
    action: 'updatePostRequest',
    payload: {
      postId: 'xxx',
      formData: {},
      data: {
        title: 'Photo from last trip in USA',
      },
      history: {},
    },
    expectedAction: {
      type: POST_ACTIONS.UPDATE_POST_REQUEST,
      payload: {
        postId: 'xxx',
        formData: {},
        data: {
          title: 'Photo from last trip in USA',
        },
        history: {},
      },
    }
  },
  {
    action: 'updatePostSuccess',
    payload: {
      title: 'Photo from last trip in USA',
    },
    expectedAction: {
      type: POST_ACTIONS.UPDATE_POST_SUCCESS,
      payload: {
        title: 'Photo from last trip in USA',
      },
    }
  },
  {
    action: 'deletePostRequest',
    payload: {
      postId: 'xxx',
      history: {},
    },
    expectedAction: {
      type: POST_ACTIONS.DELETE_POST_REQUEST,
      payload: {
        postId: 'xxx',
        history: {},
      },
    }
  },
  {
    action: 'deletePostSuccess',
    payload: {
      deletedPostId: 'xxx',
    },
    expectedAction: {
      type: POST_ACTIONS.DELETE_POST_SUCCESS,
      payload: {
        deletedPostId: 'xxx',
      },
    }
  },
  {
    action: 'likePostRequest',
    payload: 'xxx',
    expectedAction: {
      type: POST_ACTIONS.LIKE_POST_REQUEST,
      payload: {
        postId: 'xxx',
      },
    }
  },
  {
    action: 'likePostSuccess',
    payload: {
      title: 'Photo from last trip in USA',
    },
    expectedAction: {
      type: POST_ACTIONS.LIKE_POST_SUCCESS,
      payload: {
        title: 'Photo from last trip in USA',
      },
    }
  },
];

describe('actions/posts', () => {
  _.values(postsActions).forEach(fn => {
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
