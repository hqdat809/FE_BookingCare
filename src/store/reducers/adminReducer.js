import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingData: false,
    // Khi api phức tạp dùng biến isLoadingData để phân biệt 
    // khi nào api được gọi xong
    genders: [],
    roles: [],
    position: [],
    users: [],
    topDoctors: [],
    allDoctors: []

}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state }
            state.isLoadingData = true
            return {
                ...copyState,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data
            state.isLoadingData = false

            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_FAILED:
            state.genders = []
            state.isLoadingData = false

            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.position = action.data

            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_FAILED:
            state.position = []

            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data

            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_FAILED:
            state.roles = []

            return {
                ...state,
            }
        case actionTypes.FETCH_USER_SUCCESS:
            // state.roles = action.data
            let newState = {
                ...state,
                users: action.data
            }

            return {
                ...newState,
            }
        case actionTypes.FETCH_USER_FAILED:
            state.users = []

            return {
                ...state,
            }
        case actionTypes.FETCH_TOP_DOCTOR_SUCCESS:
            state.topDoctors = action.data
            console.log(action.data)
            return {
                ...state,
            }
        case actionTypes.FETCH_TOP_DOCTOR_FAILED:
            state.topDoctors = []

            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_DOCTOR_SUCCESS:
            state.allDoctors = action.data
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_DOCTOR_FAILED:
            state.allDoctors = []

            return {
                ...state,
            }

        default:
            return state;
    }
}

export default adminReducer;