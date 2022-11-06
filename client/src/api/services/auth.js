import { post } from '../api';

export async function register(user) {
    const result = await post('/api/auth/register', user);

    const data = {
        id: result._id
    };

    localStorage.setItem('user', JSON.stringify(data));

    return result;
}

export async function login(user) {
    const result = await post('/api/auth/login', user);

    const data = {
        id: result._id
    };

    localStorage.setItem('user', JSON.stringify(data));

    return result;
}