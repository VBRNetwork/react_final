
import vbrincapi from 'libs/vbrinc-api'

export const SAVE_BREADCRUMBS = Symbol('SAVE_BREADCRUMBS');
export const SAVE_SETTINGS = Symbol('SAVE_SETTINGS');
export const SAVE_SKILLS = Symbol('SAVE_SKILLS');

export function getVBRSettings() {
    return dispatch => {
        return vbrincapi.getAppSettings().then(res => {
            dispatch({
                type: SAVE_SETTINGS,
                data: res
            })
            return res
        })
    }
}

export function getSkillsAndLanguages() {
    return dispatch => {
        return vbrincapi.getSkillsLanguages().then(res => {
            dispatch({
                type: SAVE_SKILLS,
                data: res
            })
            return res
        })
    }
}


export function saveBreadcrumbs(breadcrumbs) {
    return dispatch => {
        return vbrincapi.getAppSettings().then(res => {
            dispatch({
                type: SAVE_BREADCRUMBS,
                data: breadcrumbs
            })
            return breadcrumbs
        })
    }
}
