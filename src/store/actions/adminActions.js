import actionTypes from './actionTypes';
import { getAllCodeService, createNewUserService, getAllUser, getAllDoctors, deleteUserService, editUserService, getTopDoctorHome, saveDetailInforDoctor } from '../../services/userService'
import { toast } from 'react-toastify'



export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })
            let res = await getAllCodeService("gender")
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFailed())
            }
        } catch (error) {
            dispatch(fetchGenderFailed())
            console.log('fetch gender start error: ', error)
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

export const fetchPositionSuccess = () => {
    // type: actionTypes.FETCH_POSITION_SUCCESS,
    // data: positionData
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService('position')
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_POSITION_SUCCESS,
                    data: res.data
                })
            } else {
                dispatch(fetchPositionFailed())
            }
        } catch (error) {
            dispatch(fetchPositionFailed())
            console.log('fetch position failed: ', error)
        }
    }
}

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

export const fetchRoleSuccess = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService('role')
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ROLE_SUCCESS,
                    data: res.data
                })
            } else {
                dispatch(fetchRoleFailed())
            }
        } catch (error) {
            dispatch(fetchRoleFailed())
            console.log('fetch role failed: ', error)
        }
    }
}

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

export const createUserSuccess = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data)
            if (res && res.errCode === 0) {
                toast.success('Create user success ...')
                // dispatch({
                //     type: actionTypes.CREATE_USER_SUCCESS,
                //     data: res.data
                // })
                dispatch(fetchUserSuccess())
            } else {
                toast.error(res.message)
                dispatch(createUserFailed())
            }
        } catch (error) {
            console.log('create user failed: ', error)
            dispatch(createUserFailed())
        }
    }
}

export const createUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})

export const fetchUserSuccess = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUser('ALL')
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_USER_SUCCESS,
                    data: res.users
                })
            } else {
                console.log('create user failed: ', res.message)
                dispatch(fetchUserFailed())
            }
        } catch (error) {
            console.log('create user failed: ', error)
            dispatch(fetchUserFailed())
        }
    }
}

export const fetchUserFailed = () => ({
    type: actionTypes.FETCH_USER_FAILED
})

export const deleteUserSuccess = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId)
            if (res && res.errCode === 0) {
                toast.success('Delete user success ...')
                dispatch(fetchUserSuccess())
            } else {
                toast.error(res.message)
                dispatch(deleteUserFailed())
            }
        } catch (error) {
            console.log('detele user failed: ', error)
            dispatch(deleteUserFailed())
        }
    }
}
export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})

export const editUserSuccess = (user) => {
    return async (dispatch, getState) => {
        try {
            console.log(user)
            let res = await editUserService(user)
            if (res && res.errCode === 0) {
                toast.success('edit user success ...')
                dispatch(fetchUserSuccess())
            } else {
                console.log(res.message)
                toast.error(res.message)
                dispatch(editUserFailed())
            }
        } catch (error) {
            console.log('edit user failed: ', error)
            dispatch(editUserFailed())
        }
    }
}

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHome('')
            console.log(res.data)
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
                    data: res.data
                })
            } else {
                console.log(res.message)
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTOR_FAILED
                })
            }
        } catch (error) {
            console.log('edit user failed: ', error)
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTOR_FAILED
            })
        }
    }
}

export const fetchAllDoctors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctors()
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTOR_SUCCESS,
                    data: res.data
                })
            } else {
                console.log(res.message)
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTOR_FAILED
                })
            }
        } catch (error) {
            console.log('edit user failed: ', error)
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTOR_FAILED
            })
        }
    }
}

export const saveDetailDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailInforDoctor(data)
            if (res && res.errCode === 0) {
                toast.success('Save infor detail doctor success')
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
                    data: res.data
                })
            } else {
                console.log(res.message)
                toast.error('Save infor detail doctor failed')
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED
                })
            }
        } catch (error) {
            toast.error('Save infor detail doctor failed')
            console.log('save detail doctor failed: ', error)
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED
            })
        }
    }
}
