import axios from 'axios'

export function add(data) {
    return axios.get('/add',{
        params: data
    })
}