import axios from 'axios';

const API_URL = 'https://kafitis.intbel.ru/api/token';

class AuthService {
    login(user) {
        return axios
            .post(API_URL, {
                username: user.username,
                password: user.password
            })
            .then(response => {
                console.debug(response.data);
                if (response.data.access) {
                    localStorage.setItem('user', JSON.stringify(response.data.access));
                    if(response.data.refresh)
                        localStorage.setItem('token-refresh', JSON.stringify(response.data.refresh));
                }


                return response;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL, {
            username: user.username,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();