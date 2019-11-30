import Immutable from 'immutable'
import * as ActionType from '../actions/register_user'

export const initialState = Immutable.fromJS({
  step1:{name: 'e'},
  step2: []
})

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.SAVE_STEP:
      return state.merge(
        Object.assign({}, action.payload, {
            step1: [],
            step2: []
        })
      )

    default:
      return state
  }
}
