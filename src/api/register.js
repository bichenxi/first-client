import axios from '../utils/http'
const BASE_URL = '/register'

export function register(query) {
    return axios.post(BASE_URL, query)
}
