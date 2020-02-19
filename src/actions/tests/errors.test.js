import _ from 'lodash';

import * as errorsActions from '../errors';
import { ERROR_ACTIONS } from '../../constants';

const data = [
  {
    action: 'parseError',
    payload: {
      error: 'Wrong Credential',
    },
    expectedAction: {
      type: ERROR_ACTIONS.PARSE_ERROR,
      payload: {
        error: 'Wrong Credential',
      },
    }
  },
  {
    action: 'resetError',
    expectedAction: {
      type: ERROR_ACTIONS.RESET_ERROR,
    }
  },
];

describe('actions/comments', () => {
  _.values(errorsActions).forEach(fn => {
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
