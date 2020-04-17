import request from '@/utils/request'

/**
 * 根据groupId查找suit
 * @param {int} groupId 组id
 */
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

/**
 * 添加suit
 * @param {obj} suitInfo suit信息
 */
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

/**
 * 给指定suit添加关联api
 * @param {obj}} apiInfo 接口信息表
 * @param {int} suitId suitId
 */
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

/**
 * 根据suitId查找相关api
 * @param {int} suitId suitId
 */
export function getApisBySuitId(suitId) {
  console.log('start request to query apis of ' + suitId)
  return request({
    url: '/api/queryBySuitId',
    method: 'post',
    data: {
      suitId: suitId
    }
  })
}

/**
 * 删除指定suit
 * @param {int} suitId suitId
 */
export function deleteSuitBySuitId(suitId) {
  console.log('start request to delete suit ' + suitId)
  return request({
    url: '/suit/delete',
    method: 'post',
    data: {
      id: suitId
    }
  })
}
