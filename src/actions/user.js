import vbrincapi from 'libs/vbrinc-api'

export const SAVE_TOKEN = Symbol('SAVE_TOKEN');

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

function generateAuthCookies(res) {
    if(res.access){
        document.cookie = 'token=' + res.token + '; expires=Thu, 01 Jul 2019 00:00:00 UTC; path=/;'
    }
}

export function logout() {
    return dispatch => {
        return vbrincapi.logout().then(res => {
            dispatch({
                type: SAVE_TOKEN,
                data: {
                    token: 0,
                    user: {
                        pk: 0,
                        first_name: '',
                        last_name: '',
                        username: ''
                    }
                }
            });

            localStorage.removeItem('id_token');
            localStorage.removeItem('profile');
            document.cookie = 'token= ""; expires=Thu, 01 Jul 2017 00:00:00 UTC; path=/;'
            return res
        })
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