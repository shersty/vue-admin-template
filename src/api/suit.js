import request from '@/utils/request'

export function getSuitList() {
  return request({
    // url: '/vue-admin-template/suit/list',
    url: '/suit/queryByGroupId',
    method: 'post',
    data: {
      groupId: 1
    }
  })
}
