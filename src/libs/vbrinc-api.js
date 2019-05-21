import axios from 'axios'
import humps from 'humps'
import config from 'config'

const vbrincapi = {
  getToken ({ username, password }) {
    let path = `http://192.168.0.18/v1/token/`
    return axios.post(path, { username, password }).then(res => {
      return humps.camelizeKeys(res.data)
    })
  }
}

export default vbrincapi
