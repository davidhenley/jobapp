import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from '../actions/types';

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:

    case FACEBOOK_LOGIN_FAIL:

    default:
      return state;
  }
}
