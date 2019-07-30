import axios from 'axios'
import humps from 'humps'
let apiUrl = 'https://marketplace.vbrinc.ro/api/v1/'
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    apiUrl = 'http://127.0.0.1:8000/api/v1/'
}

const instance = axios.create({
    baseURL: apiUrl,
    headers: {'Access-Control-Allow-Origin': '*'}
});

let token = '';
let tokenJson = {};
if (typeof window !== 'undefined') {
    tokenJson = JSON.parse(localStorage.getItem('persist:user'));
    if(tokenJson){
      token = token.token
    }
}

const secureInstance = axios.create({
    baseURL: apiUrl,
    headers: {'Access-Control-Allow-Origin': '*','Authorization': "Bearer " + token }
});


const vbrincapi = {
    getToken({username, password}) {
        return instance.post(apiUrl + 'accounts/auth/login/', {username, password}).then(res => {
            return humps.camelizeKeys(res.data)
        })
    },
    logout() {
        return secureInstance.post(apiUrl+'accounts/auth/logout/').then(res => {
            return humps.camelizeKeys(res.data)
        })
    },
    getAppSettings() {
        return instance.get(apiUrl + 'settings/', {}).then(res => {
            return humps.camelizeKeys(res.data)
        })
    }
};



export default vbrincapi
