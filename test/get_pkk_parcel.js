const expect = require('chai').expect
const {apiRequests} = require('../data/apiRequests')
const api = new apiRequests()
const users = require('../data/users')


describe('Tests for get_pkk_parcel', function () {
  this.timeout(180000)

  it('Response time is less than 30s', async function () {
    
    const time = await api.getPkkParcel(users.admin.token)
    expect(time).to.be.below(30, 'Запрос превышает 30s')
    console.log(time)
    });
    
  });