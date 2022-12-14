import {
    LOGIN_USER_PENDING,
    LOGIN_USER_REJECTED,
    LOGIN_USER_SUCCESS,
    REGISTER_USER_PENDING,
    REGISTER_USER_REJECTED,
    REGISTER_USER_SUCCESS,
    UPDATE_USER_DATA_PENDING,
    UPDATE_USER_DATA_REJECTED,
    UPDATE_USER_DATA_SUCCESS,
    UPDATE_USER_IMAGE_PENDING,
    UPDATE_USER_IMAGE_REJECTED,
    UPDATE_USER_IMAGE_SUCCESS,
} from './authActions';

const reducer = (state, action) => {
    switch (action.type) {
        case REGISTER_USER_PENDING:
            return {
                ...state,
                isLoading: true
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                isSuccess: true,
                isError: false,
                error: ''
            };
        case REGISTER_USER_REJECTED:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                isError: true,
                error: action.payload,
            };
        case LOGIN_USER_PENDING:
            return {
                ...state,
                isLoading: true
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                isSuccess: true,
                isError: false,
                error: '',
            };
        case LOGIN_USER_REJECTED:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                isError: true,
                error: action.payload,
            };
        case UPDATE_USER_IMAGE_PENDING:
            return {
                ...state,
                isLoading: true
            };
        case UPDATE_USER_IMAGE_SUCCESS:
            return {
                ...state,
                user: { ...state.user, userImage: action.payload },
                isLoading: false,
                isSuccess: true,
                isError: false,
                error: '',
            };
        case UPDATE_USER_IMAGE_REJECTED:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                isError: true,
                error: action.payload,
            };
        case UPDATE_USER_DATA_PENDING:
            return {
                ...state,
                isLoading: true
            };
        case UPDATE_USER_DATA_SUCCESS:
            const userData = action.payload;
            return {
                ...state,
                user: { ...state.user, ...userData },
                isLoading: false,
                isSuccess: true,
                isError: false,
                error: '',
            };
        case UPDATE_USER_DATA_REJECTED:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                isError: true,
                error: action.payload,
            };

        default:
            throw new Error(`No such action ${action.type}`);
    }

};

export default reducer;