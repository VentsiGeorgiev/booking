import { createContext, useContext, useReducer } from 'react';
import reducer from './authReducer';
import { register, login, updateUserData, uploadUserImage } from '../../api/services/auth';
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

const AuthContext = createContext();

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: '',
};

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    const registerUser = async (user) => {
        dispatch({ type: REGISTER_USER_PENDING });
        try {
            const response = await register(user);
            dispatch({ type: REGISTER_USER_SUCCESS, payload: response });
        } catch (error) {
            dispatch({ type: REGISTER_USER_REJECTED, payload: error.message });
        }
    };

    const loginUser = async (user) => {
        dispatch({ type: LOGIN_USER_PENDING });
        try {
            const response = await login(user);
            dispatch({ type: LOGIN_USER_SUCCESS, payload: response });
        } catch (error) {
            dispatch({ type: LOGIN_USER_REJECTED, payload: error.message });
        }
    };

    const uploadImage = async (user) => {
        dispatch({ type: UPDATE_USER_IMAGE_PENDING });
        try {

            const response = await uploadUserImage(user);
            dispatch({ type: UPDATE_USER_IMAGE_SUCCESS, payload: response });
        } catch (error) {
            dispatch({ type: UPDATE_USER_IMAGE_REJECTED, payload: error.message });
        }
    };

    const updateUser = async (user) => {
        dispatch({ type: UPDATE_USER_DATA_PENDING });
        try {
            const response = await updateUserData(user);
            dispatch({ type: UPDATE_USER_DATA_SUCCESS, payload: response });
        } catch (error) {
            dispatch({ type: UPDATE_USER_DATA_REJECTED, payload: error.message });
        }
    };

    return <AuthContext.Provider
        value={{
            ...state,
            dispatch,
            registerUser,
            loginUser,
            uploadImage,
            updateUser,
        }}
    >
        {children}
    </AuthContext.Provider>;
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export default AuthProvider;