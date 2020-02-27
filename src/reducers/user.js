import Immutable from 'immutable'
import * as ActionType from '../actions/user'
import update from 'immutability-helper'
import { NO_DATA } from '../actions/user'

export const initialState = Immutable.fromJS({
  name: 'guest',
  user_id: 0,
  token: 0,
  username: 'guest',
  type:0,
  profile:{
  }
});

export default function (state = initialState, action) {
  let data = action.data;
  switch (action.type) {
    case ActionType.SAVE_TOKEN:
        return update(state, {
                token: { $set: data.token },
                user_id: { $set: data.user.pk },
                name: { $set: data.user.first_name + ' ' + data.user.last_name },
                username: { $set: data.user.username},
                type : {$set: data.user.type},
                profile:{
                    $set: data.user.profile
                }
          });
    case ActionType.NO_DATA:
        return state
    default:
      return state
  }
}
