import axios from '../utils/http'

const BASE_URL = '/customer'

export function upDataCustomer(query) {
    return axios.post(`${BASE_URL}/upData`, query)
}
