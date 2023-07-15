import request from '@/utils/requests'


const url = '/api/admin/sc'


function getSingleChoice(params) {
    return request({
        url: url,
        method: 'get',
        params,
    })
}

function createSingleChoice(data) {
    return request({
        url: url,
        method: 'post',
        data
    })
}

function updateSingleChoice(data) {
    return request({
        url: url,
        method: 'put',
        data
    })
}

function deleteSingleChoice(data) {
    return request({
        url: url,
        method: 'delete',
        data
    })
}



export default {
    getSingleChoice,
    createSingleChoice,
    updateSingleChoice,
    deleteSingleChoice,
}