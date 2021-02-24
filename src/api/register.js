import axios from 'axios'
const BASE_URL = '/register'

export function register(query) {
    return axios.post(BASE_URL, query)
}

export function login(query) {
    return axios.post(`${BASE_URL}/login`, query)
}
