import api from './apiConfig'
import jwtDecode from 'jwt-decode'

export const signUp = async (credentials) => {
    try {
        const res = await api.post('/sign-up', credentials)
        localStorage.setItem('token', res.data.token)
        const user = jwtDecode(res.data.token)
        return user
    } catch (error){
        throw error
    }
}

export const signIn = async (credentials) => {
    try {
        const res = await api.post('/sign-in', credentials)
        localStorage.setItem('token', res.data.token)
        const user = jwtDecode(res.data.token)
        return user
    } catch (error){
        throw error
    }
}

export const signOut = async () => {
    try {
        localStorage.removeItem('token')
        return true
    } catch (error){
        throw error
    }
}

export const changePassword = async (credentials) => {
    try {
        const res = await api.post("/change-password", credentials);
        localStorage.setItem('token', res.data.token);
        const user = jwtDecode(res.data.token);
        return user
    } catch (error){
        throw error
    }
}

export const verifyUser = async () => {
    const token = localStorage.getItem('token')
    if (token) {
        const res = await api.get('/verify')
        return res.data
    }
    return false
}

export const addToCart = async (userId, productId) => {
    try {
        const res = await api.post(`/users/${userId}/add-to-cart`, productId)
        return res.data
    } catch (error) {
        throw error
    }
}

export const removeFromCart = async (userId, productId) => {
    try {
        const res = await api.post(`/users/${userId}/remove-from-cart`, productId)
        return res.data
    } catch (error) {
        throw error
    }
}
// export const viewCart = async (credentials) => {
//     try {
//         const res = await api.get("/view-cart", credentials)
//         return res.data
//     } catch (error) {
//         throw error
//     }
// }

export const getUser = async (id) => {
    try {
        const res = await api.get(`/users/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}