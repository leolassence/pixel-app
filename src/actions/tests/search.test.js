import _ from 'lodash';

import * as searchActions from '../search';
import { SEARCH_ACTIONS } from '../../constants';

const data = [
  {
    action: 'searchRequest',
    payload: 'i search paris',
    expectedAction: {
      type: SEARCH_ACTIONS.SEARCH_REQUEST,
      payload: {
        query: 'i search paris',
      },
    }
  },
  {
    action: 'searchSuccess',
    payload: [
      {
        type: 'post',
        title: 'a title'
      },
      {
        type: 'user',
        username: 'john doe'
      },
    ],
    expectedAction: {
      type: SEARCH_ACTIONS.SEARCH_SUCCESS,
      payload: [
        {
          type: 'post',
          title: 'a title'
        },
        {
          type: 'user',
          username: 'john doe'
        },
      ],
    }
  },
];

describe('actions/search', () => {
  _.values(searchActions).forEach(fn => {
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
