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
