
import vbrincapi from 'libs/vbrinc-api'

export const SAVE_BREADCRUMBS = Symbol('SAVE_BREADCRUMBS');
export const SAVE_SETTINGS = Symbol('SAVE_SETTINGS');

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
