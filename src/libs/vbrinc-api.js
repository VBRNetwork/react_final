import axios from 'axios'
import humps from 'humps'
let apiUrl = 'https://marketplace.vbrinc.ro/api/v1/';
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    apiUrl = 'http://127.0.0.1:8000/api/v1/'
}

const instance = axios.create({
    baseURL: apiUrl,
    headers: {'Access-Control-Allow-Origin': '*','Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
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
        let bodyFormData = new FormData();
        bodyFormData.set('username', username);
        bodyFormData.set('password', password);
        return instance.post(apiUrl + 'accounts/auth/login/', bodyFormData).then(res => {
            return res;
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
    },
    registerAccount(data){
        let bodyFormData = new FormData();
        bodyFormData.set('username', data.email);
        bodyFormData.set('email', data.email);
        bodyFormData.set('first_name', data.first_name);
        bodyFormData.set('last_name', data.last_name);
        bodyFormData.set('password', data.password);
        bodyFormData.set('confirm_password', data.confirm_password,);

        return instance.post(apiUrl + 'accounts/auth/registration',bodyFormData).then(res => {
            return humps.camelizeKeys(res.data)
        })
    }
};


export default vbrincapi
