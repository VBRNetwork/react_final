import vbrincapi from 'libs/vbrinc-api'
export const SAVE_MEMBERS = Symbol('SAVE_MEMBERS')
export const UPDATE_MEMBERS = Symbol('UPDATE_MEMBERS')

export function getMembersList({ filter}) {
    return dispatch => {
        return vbrincapi.getMembers().then(res => {
            dispatch({
                type: SAVE_MEMBERS,
                data: res
            });
            return res
        })
    }
}
