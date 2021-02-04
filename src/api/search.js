import axios from 'axios'
const BASE_URL = '/search'

export function search(q) {
    
    return axios.get(BASE_URL,{ params: {
        q
    } })
}