import { getToken } from '../utils/getToken';

async function request(url, options) {
    try {
        const response = await fetch(url, options);


        if (response.status <= 199 || response.status >= 300) {
            const err = await response.json();
            throw new Error(err.message);
        }

        try {
            const data = await response.json();
            return data;
        } catch (error) {
            return response;
        }

    } catch (error) {
        throw error;
    }
}

function createOptions(method = 'get', data) {
    const options = {
        method,
        headers: {}
    };

    const token = getToken();
    if (token !== null) {
        options.headers.Authorization = `Bearer ${token}`;
    }

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    return options;

}

export async function get(url) {
    return await request(url, createOptions());
}

export async function post(url, data) {
    return await request(url, createOptions('post', data));
}

export async function put(url, data) {
    return await request(url, createOptions('put', data));
}

export async function del(url, data) {
    return await request(url, createOptions('delete', data));
}
