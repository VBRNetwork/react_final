import Immutable from 'immutable'
import * as ActionType from '../actions/members_actions.js'
import update from 'immutability-helper'

export const initialState = Immutable.fromJS({
    list:[]
});

export default function (state = initialState, action) {
    let data = action.data;
    switch (action.type) {
        case ActionType.SAVE_MEMBERS:
            return update(state, {list:{ $set: data }});
        case ActionType.UPDATE_MEMBERS:
            return update(state, {list:{ $set: data }});
        default:
            return state
    }
}
