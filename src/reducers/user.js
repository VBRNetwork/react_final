import Immutable from 'immutable'
import * as ActionType from 'actions/user'
import update from 'immutability-helper'

export const initialState = Immutable.fromJS({
  name: 'guest',
  user_id: 0,
  token: 0,
  username: 'guest',
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
                profile:{
                    $set: data.user.profile
                }
          });
    default:
      return state
  }
}
