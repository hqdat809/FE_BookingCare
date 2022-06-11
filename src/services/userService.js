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

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}

const getTopDoctorHome = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}

const getAllDoctors = () => {
    return axios.get(`/api/get-all-doctor`)
}

const saveDetailInforDoctor = (data) => {
    return axios.post('/api/save-infor-doctor', data)
}

const getDetailInforDoctor = (inputId) => {
    return axios.get(`/api/get-detail-doctor-by-id?id=${inputId}`)
}

const saveBulkScheduleDoctor = (data) => {
    return axios.post('/api/bulk-create-schedule', data)
}

export {
    handleLoginApi, getAllUser, createNewUserService,
    deleteUserService, editUserService, getAllCodeService,
    getTopDoctorHome, getAllDoctors, saveDetailInforDoctor,
    getDetailInforDoctor, saveBulkScheduleDoctor
}
