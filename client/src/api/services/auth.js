import { post } from '../api';

export async function register(user) {
    const result = await post('/api/auth/register', user);

    return result;
}

export async function login(user) {
    const result = await post('/api/v1/auth/login', user);

    return result;
}