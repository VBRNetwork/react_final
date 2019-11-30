import Immutable from 'immutable'
import * as ActionType from '../actions/app_settings'
import update from 'immutability-helper'

export const initialState = Immutable.fromJS({
    main_menu:[],
    breadcrumbs:[]
});

export default function (state = initialState, action) {
  let data = action.data;
  switch (action.type) {
    case ActionType.SAVE_SETTINGS:
        return update(state, {main_menu:{ $set: data }});
    case ActionType.SAVE_BREADCRUMBS:
        return update(state, {breadcrumbs:{ $set: data }});
    default:
      return state
  }
}
