import Immutable from 'immutable'
import * as ActionType from 'actions/app_settings'
import update from 'immutability-helper'

export const initialState = Immutable.fromJS({
    main_menu:[]
});

export default function (state = initialState, action) {
  let data = action.data;
  switch (action.type) {
    case ActionType.SAVE_SETTINGS:
        console.log(data);
        return update(state, {main_menu:{ $set: data }});
    default:
      return state
  }
}
