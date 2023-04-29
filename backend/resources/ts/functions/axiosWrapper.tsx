import axios from 'axios'

export const axiosWrapper = () => {

    let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    if (import.meta.env.PROD) {
        headers['X-Api-Version'] = import.meta.env.VITE_API_VERSION
    }
    const instance = axios.create({
        //        baseURL: import.meta.env.BASE_URL,
        headers: headers,
        withCredentials: true,
    });

    instance.interceptors.response.use(
        function (response) {
            return response
        },
        function (error) {
            // 失敗時の処理
            const url = error.response.config.url
        }
    )
    return instance
}
