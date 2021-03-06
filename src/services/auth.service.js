import axios from 'axios';
import authHeader from "./auth-header";

const API_URL = 'https://kafitis.intbel.ru/api/';

class AuthService {
    async login(user) {

        let response = await axios.post(API_URL + "token", {
            username: user.username,
            password: user.password
        })
        if (response.data.access && response.data.refresh) {
            localStorage.setItem('access-token', response.data.access);
            localStorage.setItem('refresh-token', response.data.refresh);
            let user = await this.getUser();
            console.log(user);
            return Promise.resolve(user);
        }
    }

    async getUser() {
        let user = await axios.get(API_URL + "users", {headers: authHeader()});
        return user.data[0];
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + "users/", user);
    }

    async refreshToken() {
        let response = await axios.post(API_URL + "token/refresh", {refresh: localStorage.getItem('refresh-token')});
        localStorage.setItem('access-token', response.data.access);
        return response.data.access;
    }
}

export default new AuthService();