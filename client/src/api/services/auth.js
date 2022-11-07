import { post, put } from '../api';

export async function register(user) {
    const result = await post('/api/auth/register', user);

    const data = {
        id: result._id,
        userImage: result.userImage
    };

    localStorage.setItem('user', JSON.stringify(data));

    return result;
}

export async function login(user) {
    const result = await post('/api/auth/login', user);

    const data = {
        id: result._id,
        userImage: result.userImage
    };

    localStorage.setItem('user', JSON.stringify(data));

    return data;
}

export async function updateUserImage(formData) {


    const response = await fetch('/api/auth/update', {
        method: 'PUT',
        body: formData
    });
    const result = await response.json();

    return result;

}