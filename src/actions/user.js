import vbrincapi from 'libs/vbrinc-api'

export const SAVE_TOKEN = Symbol('SAVE_TOKEN');
export const BECOME_FREELANCER = Symbol('BECOME_FREELANCER');
export const SUBSCRIBE_EMAIL = Symbol('SUBSCRIBE_EMAIL');
export const NO_DATA = Symbol('NO_DATA');

export function getAccessToken({username, password}) {
    return dispatch => {
        return vbrincapi.getToken({username, password}).then(res => {
            dispatch({
                type: SAVE_TOKEN,
                data: res.data
            });
            generateAuthCookies(res.data);
            return res.data
        })
    }
}

export function becomeFreelancer(data) {
    return dispatch => {
        return vbrincapi.becomeFreelancer(data).then(res => {
            dispatch({
                type: BECOME_FREELANCER,
                data: res.data
            });
            return res.data
        })
    }
}

export function subscribeEmail(email) {
    return dispatch => {
        return vbrincapi.subscribeToNewsletter(email).then(res => {
            dispatch({
                type: SUBSCRIBE_EMAIL,
                data: res.data
            });
            return res.data
        })
    }
}


export function knowYourCustomer(data) {
    return dispatch => {
        return vbrincapi.knowYourCustomer(data).then(res => {
            dispatch({
                type: SAVE_TOKEN,
                data: res.data
            });
            return res.data
        })
    }
}


function generateAuthCookies(res) {
    if(res.token){
        document.cookie = 'token=' + res.token + '; expires=Thu, 01 Jul 2019 00:00:00 UTC; path=/;'
    }
}

export function logout() {
    return dispatch => {
        return vbrincapi.logout().then(res => {
            document.cookie = 'token= ""; expires=Thu, 01 Jul 2017 00:00:00 UTC; path=/;'
            dispatch({
                type: SAVE_TOKEN,
                data: {
                    token: 0,
                    user:{
                        pk:0,
                        username: 'guest',
                        first_name:'guest',
                        last_name:'guest',
                        type:0,
                        profile:{
                        }
                    },

                }
            });
            return res
        })
    }
}

export function logoutStore() {
    return dispatch => {
        dispatch({
            type: SAVE_TOKEN,
            data: {
                token: 0,
                user:{
                    pk:0,
                    username: 'guest',
                    first_name:'guest',
                    last_name:'guest',
                    type:0,
                    profile:{
                    }
                },

            }
        });
    }
}


export function registerAccount(data) {
    return dispatch => {
        return vbrincapi.registerAccount(data).then(res => {
            dispatch({
                type: SAVE_TOKEN,
                data: res.data
            });
            generateAuthCookies(res.data);
            return res.data
        })
    }
}

export function resetPassword(data){
    return dispatch => {
        return vbrincapi.resetPassword(data.email).then(res => {
            return res.data
        })
    }
}