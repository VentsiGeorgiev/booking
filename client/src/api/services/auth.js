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

    const data = {
        id: result._id,
        userImage: result.userImage,
        firstName: result.firstName,
        lastName: result.lastName,
    };

    return data;
}