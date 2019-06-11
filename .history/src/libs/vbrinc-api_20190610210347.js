import axios from 'axios'
import humps from 'humps'

const apiUrl = 'http://api.vbrinc.test:8000/v1/accounts/auth'

const vbrincapi = {
  getToken ({ username, password }) {
    return axios.post(apiUrl, { username, password }).then(res => {
      return humps.camelizeKeys(res.data)
    })
  },
  logout ({token}) {
    return axios.post(apiUrl, { username, password }).then(res => {
      return humps.camelizeKeys(res.data)
    })
  }
}

export default vbrincapi
