import request from '@/utils/requests'


const url = '/api/admin/category'


function getCategory(params) {
    return request({
        url: url,
        method: 'get',
        params: params
    })
}



export default {
    getCategory,

}