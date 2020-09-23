import TokenService from '../Services/token-service'
import config from '../config'

const IcebergApiService = {
  getIcebergs() {
    return fetch(`${config.API_ENDPOINT}/icebergs`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getIceberg(icebergId) {
    return fetch(`${config.API_ENDPOINT}/icebergs/${icebergId}`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default IcebergApiService
