import Immutable from 'immutable'
import * as ActionType from 'actions/user'
import update from 'immutability-helper'

export const initialState = Immutable.fromJS({
  username: 'guest',
  user_id: 0,
  token: 0,
  refresh_token: 0
})

export default function (state = initialState, action) {
  let data = action.data
  switch (action.type) {
    case ActionType.SAVE_TOKEN:
      const newData = update(state, {
        token: { $set: data.access },
        refresh_token: { $set: data.refresh }
      })
      return newData
    default:
      return state
  }
}
