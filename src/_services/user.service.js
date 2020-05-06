// import config from 'config';
import { authHeader } from '../_helpers';
import axios from 'axios';

export const userService = {
    login,
    logout,
    register,
    getAll,
};

const config = {apiUrl:"http://localhost:5000"}


function login(Email, Password) {
    const requestOptions = {
        method: 'POST',
        url: `${config.apiUrl}/users/authenticate`,
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({ Email, Password })
    };

    return axios(requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        url: `${config.apiUrl}/users`,
        headers: authHeader()
    };

    return axios(requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        url: `${config.apiUrl}/users/register`,
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(user)
    };

    return axios(requestOptions).then(handleResponse);
}

function handleResponse(response) {

    // console.log('response: ', response)
    // console.log('response.text(): ', response.text())

    return response.text().then(r => {
        const data = r && JSON.parse(r);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}