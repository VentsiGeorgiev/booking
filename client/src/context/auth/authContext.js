import { createContext, useContext, useReducer } from 'react';
import reducer from './authReducer';
import { register, login } from '../../api/services/auth';
import {
    LOGIN_USER_PENDING,
    LOGIN_USER_REJECTED,
    LOGIN_USER_SUCCESS,
    REGISTER_USER_PENDING,
    REGISTER_USER_REJECTED,
    REGISTER_USER_SUCCESS,
} from './authActions';

const AuthContext = createContext();

const initialState = {
    user: null,
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

    return <AuthContext.Provider
        value={{
            ...state,
            dispatch,
            registerUser,
            loginUser,
        }}
    >
        {children}
    </AuthContext.Provider>;
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export default AuthProvider;