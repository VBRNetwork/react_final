
import vbrincapi from 'libs/vbrinc-api'

export const SAVE_TOKEN = Symbol('SAVE_TOKEN')

export function getAccessToken ({ username, password }) {
  return dispatch => {
    return vbrincapi.getToken({ username, password }).then(res => {
      dispatch({
        type: SAVE_TOKEN,
        data: res
      })
      document.cookie = 'token=' + res.access + '; expires=Thu, 01 Jul 2019 00:00:00 UTC; path=/;'
      document.cookie = 'refresh_token=' + res.refresh + '; expires=Thu, 01 Jul 2019 00:00:00 UTC; path=/;'
      return res
    })
  }
}
