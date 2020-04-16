import request from '@/utils/request'

export function getSuitList(groupId) {
  return request({
    // url: '/vue-admin-template/suit/list',
    url: '/suit/queryByGroupId',
    method: 'post',
    data: {
      groupId: groupId
    }
  })
}

export function addSuit(suitInfo) {
  return request({
    url: 'suit/insert',
    method: 'post',
    data: {
      desc: suitInfo.desc,
      run: suitInfo.run,
      userName: suitInfo.userName,
      passWd: suitInfo.passWord,
      groupId: suitInfo.groupId
    }
  })
}

export function addApiBySuitId(apiInfo, suitId) {
  console.log('the add api info is' + apiInfo)
  return request({
    url: '/api/insert',
    method: 'post',
    data: {
      suit: suitId,
      desc: apiInfo.desc,
      url: apiInfo.url,
      method: apiInfo.method,
      params: apiInfo.params,
      verify: apiInfo.verify,
      step: apiInfo.step,
      pendingData: apiInfo.pendingdata,
      storingData: apiInfo.storingdata
    }
  })
}
