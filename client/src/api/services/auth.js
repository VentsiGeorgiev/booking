import { post, put } from '../api';

export async function register(user) {
    const result = await post('/api/auth/register', user);

    localStorage.setItem('user', JSON.stringify(result));

    return result;
}

export async function login(user) {

    const result = await post('/api/auth/login', user);

    localStorage.setItem('user', JSON.stringify(result));

    return result;
}

export async function uploadUserImage(formData) {


    const response = await fetch('/api/auth/update', {
        method: 'PUT',
        body: formData
    });
    const result = await response.json();

    return result;

}

export async function updateUserData(userData) {

    const result = await put('/api/auth/update-user', userData);

    return result;
}