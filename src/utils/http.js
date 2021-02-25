import axios from 'axios'

const account = window.localStorage.getItem('account')

export default axios.create({
    headers: { account },
})
