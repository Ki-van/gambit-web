import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://kafitis.intbel.ru/api/';

class UserService {

    getUserOrders() {
        return axios.get(API_URL + 'orders', { headers: authHeader() });
    }
}

export default new UserService();