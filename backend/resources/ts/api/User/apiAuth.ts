import { axiosWrapper } from '../../functions/axiosWrapper'
import { loginType } from '../../types/User/Auth'

// ログイン
export const apiAuthLogin = async (data: loginType) => {
    const axios = axiosWrapper()

    return await axios.get('/sanctum/csrf-cookie').then(async (response) => {
        return await axios.post(`/api/user/login`, data).then((res) => {
            return res.data
        })
    })
}