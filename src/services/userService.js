import axios from "../axios"
const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password })
}

const getAllUser = (inputId) => {
    return axios.get(`/api/get-alluser?id=${inputId}`)
}

const createNewUserService = (data) => {
    return axios.post(`/api/create-new-user`, data)
}

const deleteUserService = (userId) => {
    return axios.delete(`/api/delete-user`, { data: { id: userId } })
}

const editUserService = (data) => {
    return axios.put(`/api/edit-user`, data)
}

export { handleLoginApi, getAllUser, createNewUserService, deleteUserService, editUserService }
