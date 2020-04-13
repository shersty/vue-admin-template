import request from '@/utils/request'

export function getSuitList() {
  return request({
    url: '/vue-admin-template/suit/list',
    method: 'get'
  })
}
