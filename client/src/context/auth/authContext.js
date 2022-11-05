import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const AuthContext = createContext();

const initialState = {
    user: null,
};

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <AuthContext.Provider
        value={{
            ...state,
            dispatch,
        }}
    >
        {children}
    </AuthContext.Provider>;
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export default AuthProvider;