const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()

class apiRequests {
  constructor() {
    this.host = process.env.API_HOST
    this.accessToken = null
    this.accessExpiresAt = 0
  }
  
  async getPkkParcel(token) {
    const start = Date.now()
    const response = await axios({
      method: 'GET',
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
      },
      url: `${this.host}/get_pkk_parcel?y=37.542582&x=55.803317&parcel_type=1`

    })
    const finish = Date.now()
    const time = (finish - start) / 1000

    return time
  }
}

module.exports = {apiRequests}