import reducer from '../reducerPost';
import {
  POST_ACTIONS,
  COMMENT_ACTIONS,
} from '../../constants';

describe('reducers/reducerPost', () => {
  it('should default return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      post: {},
      postList: []
    });
  });

  it(`should handle ${POST_ACTIONS.GET_POSTS_SUCCESS}`, () => {
    const postList = [
      {
        postId: 'xxx',
        title: 'A title',
      },
      {
        postId: 'yyy',
        title: 'Another title',
      },
    ];

    const state = {
      post: {},
      postList: [],
    };

    const invokeReducer = reducer(state, {
      type: POST_ACTIONS.GET_POSTS_SUCCESS,
      payload: postList,
    });

    expect(invokeReducer).toEqual({
      post: {},
      postList
    });

    const invokeReducer2 = reducer(state, {
      type: POST_ACTIONS.GET_POSTS_SUCCESS,
      payload: [],
    });

    expect(invokeReducer2).toEqual({
      post: {},
      postList: []
    });
  });

  it(`should handle ${POST_ACTIONS.GET_POST_SUCCESS}`, () => {
    const newPost = {
      postId: 'yyy',
      title: 'A new title',
    };

    const state = {
      post: {},
      postList: [
        {
          postId: 'xxx',
          title: 'A title 11',
        },
        {
          postId: 'yyy',
          title: 'A title 22',
        },
      ]
    };

    const invokeReducer = reducer(state, {
      type: POST_ACTIONS.GET_POST_SUCCESS,
      payload: newPost,
    });

    expect(invokeReducer.post).toEqual(newPost);
    expect(invokeReducer.postList).toContain(newPost);
    expect(invokeReducer.postList).toHaveLength(2);
  });

  it(`should handle ${POST_ACTIONS.CREATE_POST_SUCCESS}`, () => {
    const createdPost = {
      postId: 'xxx',
      title: 'A new title',
    };

    const state = {
      post: {
        postId: 'yyy',
        title: 'A title 22',
      },
      postList: [
        {
          postId: 'yyy',
          title: 'A title 22',
        },
      ]
    };

    const invokeReducer = reducer(state, {
      type: POST_ACTIONS.CREATE_POST_SUCCESS,
      payload: createdPost,
    });

    expect(invokeReducer.post).toEqual(createdPost);
    expect(invokeReducer.postList).toContain(createdPost);
    expect(invokeReducer.postList).toHaveLength(2);
  });

  it(`should handle ${POST_ACTIONS.UPDATE_POST_SUCCESS}`, () => {
    const updatedPost = {
      postId: 'xxx',
      title: 'A new title',
    };

    const state = {
      post: {
        postId: 'xxx',
        title: 'The old Title',
      },
      postList: [
        {
          postId: 'xxx',
          title: 'The old Title',
        },
        {
          postId: 'yyy',
          title: 'A title 22',
        },
      ],
    };

    const invokeReducer = reducer(state, {
      type: POST_ACTIONS.UPDATE_POST_SUCCESS,
      payload: updatedPost,
    });

    expect(invokeReducer.post).toEqual(updatedPost);
    expect(invokeReducer.postList).toContain(updatedPost);
    expect(invokeReducer.postList).toHaveLength(2);
  });

  it(`should handle ${POST_ACTIONS.DELETE_POST_SUCCESS}`, () => {
    const deletedPostId = 'xxx';

    const state = {
      post: {
        postId: 'xxx',
        title: 'The old Title',
      },
      postList: [
        {
          postId: 'xxx',
          title: 'The old Title',
        },
        {
          postId: 'yyy',
          title: 'A title 22',
        },
      ],
    };

    const invokeReducer = reducer(state, {
      type: POST_ACTIONS.DELETE_POST_SUCCESS,
      payload: deletedPostId,
    });

    expect(invokeReducer.post).toEqual({});
    expect(invokeReducer.postList).toHaveLength(1);
  });

  it(`should handle ${COMMENT_ACTIONS.CREATE_COMMENT_SUCCESS}`, () => {
    const updatedPost = {
      postId: 'xxx',
      title: 'A new title',
      comments: [
        {
          userId: '123',
          message: 'Wow amazing',
        },
      ],
    };

    const state = {
      post: {
        postId: 'xxx',
        title: 'The old Title',
      },
      postList: [
        {
          postId: 'xxx',
          title: 'The old Title',
        },
        {
          postId: 'yyy',
          title: 'A title 22',
        },
      ],
    };

    const invokeReducer = reducer(state, {
      type: COMMENT_ACTIONS.CREATE_COMMENT_SUCCESS,
      payload: updatedPost,
    });

    expect(invokeReducer.post).toEqual(updatedPost);
    expect(invokeReducer.postList).toContain(updatedPost);
    expect(invokeReducer.postList).toHaveLength(2);
  });

  it(`should handle ${POST_ACTIONS.LIKE_POST_SUCCESS}`, () => {
    const likedPost = {
      postId: 'xxx',
      title: 'A new title',
      likeCount: 2,
      likes: [
        'frederic22',
        'leodls'
      ],
    };

    const state = {
      post: {
        postId: 'xxx',
        title: 'The old Title',
      },
      postList: [
        {
          postId: 'xxx',
          title: 'The old Title',
        },
        {
          postId: 'yyy',
          title: 'A title 22',
        },
      ],
    };

    const invokeReducer = reducer(state, {
      type: POST_ACTIONS.LIKE_POST_SUCCESS,
      payload: likedPost,
    });

    expect(invokeReducer.post).toEqual(likedPost);
    expect(invokeReducer.postList).toContain(likedPost);
    expect(invokeReducer.postList).toHaveLength(2);
  });
});
