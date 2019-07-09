import axios from 'axios'
import humps from 'humps'
let apiUrl = 'https://marketplace.vbrinc.ro/api/v1/'
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    apiUrl = 'http://127.0.0.1:8000/'
}


const instance = axios.create({
    baseURL: apiUrl,
    timeout: 1000,
    headers: {'Access-Control-Allow-Origin': '*'}
})

const vbrincapi = {
    getToken({username, password}) {
        return instance.post(apiUrl + 'accounts/auth/login/', {username, password}).then(res => {
            return humps.camelizeKeys(res.data)
        })
    },
    logout({token}) {
        return instance.post(apiUrl, {username, password}).then(res => {
            return humps.camelizeKeys(res.data)
        })
    },
    getAppSettings() {
        return instance.get(apiUrl + 'settings/', {}).then(res => {
            return humps.camelizeKeys(res.data)
        })
    }
}


export default vbrincapi
