import axios from 'axios'
import humps from 'humps'

const apiUrl = 'https://marketplace.vbrinc.ro/api/v1/'

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
        return instance.post(apiUrl + 'settings/', {username, password}).then(res => {
            return humps.camelizeKeys(res.data)
        })
    }
}


export default vbrincapi
