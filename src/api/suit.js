import request from '@/utils/request'

export default getSuitList(params){
    return request({
        url: '/vue-admin-template/suit/list'
    })
}