import {
FETCH_USER_START,
FETCH_USER_SUCCESS,
FETCH_USER_FAILURE,
ADD_USER_START,
ADD_USER_SUCCESS,
ADD_USER_FAILURE,
} from '../actions'

const initialState = {
    users: {
        username: '',
        password: ''
    },
    isLoggedIn: false,
    isLoading: false
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_USER_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                isLoading: false,
                isLoggedIn: true
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_USER_START:
            return {
                ...state,
                isLoading: true
            }
        case ADD_USER_SUCCESS:
            return {
                ...state,
                users: [
                    action.payload
                ],
                isLoading: false,
                isLoggedIn: true
            }
        case ADD_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}
export default rootReducer;