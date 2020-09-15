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
//   getIcebergResponsess(icebergId) {
//     return fetch(`${config.API_ENDPOINT}/icebergs/${icebergId}/responses`, {
//       headers: {
//         // 'authorization': `basic ${TokenService.getAuthToken()}`,
//       },
//     })
//       .then(res =>
//         (!res.ok)
//           ? res.json().then(e => Promise.reject(e))
//           : res.json()
//       )
//   },
//   postIceberg(icebergId, text) {
//     return fetch(`${config.API_ENDPOINT}/comments`, {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//         // 'authorization': `basic ${TokenService.getAuthToken()}`,
//       },
//       body: JSON.stringify({
//         iceberg_id: icebergId,
//         q1,
//         q2,
//         q3,
//         q4,
//         q5,
//         q6,
//         q7,
//         q8
//       }),
//     })
//       .then(res =>
//         (!res.ok)
//           ? res.json().then(e => Promise.reject(e))
//           : res.json()
//       )
//   }
}

export default IcebergApiService
