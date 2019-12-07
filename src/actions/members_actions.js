import vbrincapi from 'libs/vbrinc-api'
export const SAVE_MEMBERS = Symbol('SAVE_MEMBERS')
export const UPDATE_MEMBERS = Symbol('UPDATE_MEMBERS')
export const SAVE_MEMBER_PROFILE = Symbol('SAVE_MEMBER_PROFILE')

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

export function getMemberProfile(id) {
    return dispatch => {
        return vbrincapi.getProfileMember(id).then(res => {
            dispatch({
                type: SAVE_MEMBER_PROFILE,
                data: res
            });
            return res
        })
    }
}