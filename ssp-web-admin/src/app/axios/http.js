import axios from 'axios'

let headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: 'Bearer ' + sessionStorage.getItem('token')
}

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: url,
            data: null,
            params: params,
            headers: headers
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}


export function POST(url, params) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: url,
            data: params, //formdata形式的只能用data参数,具体看axios官网
            headers: headers
        }).then(res => {
            resolve(res.data)
        }).catch(error => {
            reject(error.data)
        })
    })
}
