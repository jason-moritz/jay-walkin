import axios from 'axios'

const getToken = () => {
    return new Promise(resolve => {
        resolve(`Bearer ${localStorage.getItem('token') || null}`)
    })
}

export default const api = axios.create({
	baseURL:
		process.env.NODE_ENV === 'production'
			? 'https://jay-walkin.herokuapp.com/api'
			: 'http://localhost:3000/api',
});

api.interceptors.request.use(async function (config) {
    config.headers['Authorization'] = await getToken()
    return config
}, function (error) {
    console.log('Request error: ', error)
    return Promise.reject(error)
});

